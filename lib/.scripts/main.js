const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const dayjs = require("dayjs");
const { exec } = require("child_process");

// 设置根目录
const root = path.resolve(__dirname, "../../");
__dirname = root;
process.chdir(root);
const mdFiles = glob.sync("**/*.md", {
  ignore: ["node_modules/**/*", ".git/**/*", ".obsidian/**/*", "lib/**/*"],
});
const frontMatterKeyTransform = {
  title: "title",
  uid: "uid",
  aliases: "aliases",
  categories: "categories",
  tags: "tags",
  description: "description",
  original: "original",
  cover: "cover",
  cssclasses: "cssclasses",
  author: "author",
  // originalLink: "originalLink",
  createTime: "createTime",
  updateTime: "updateTime",
};

const frontMatter = async (file) => {
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  const frontMatter = {};
  const stat = fs.statSync(file);

  for (const key of Object.keys(frontMatterKeyTransform)) {
    if (data.data[frontMatterKeyTransform[key]]) {
      frontMatter[key] = data.data[frontMatterKeyTransform[key]];
    } else {
      frontMatter[key] = null;
      if (key === "title") {
        frontMatter[key] = data.data.title || path.basename(file, ".md");
      }
    }

    if (key === "createTime") {
      frontMatter[key] = await getCreateTime(file);
    }
    if (key === "uid" && !frontMatter[key]) {
      frontMatter[key] = stat.ino;
    }
    if (key === "updateTime") {
      frontMatter[key] = await getUpdateTime(file);
    }
  }
  return frontMatter;
};

function getCreateTime(fileName) {
  return new Promise((resolve, reject) => {
    const gitLog = `git log --reverse --pretty=format:"%at" -- "${fileName}" | head -1`;
    exec(gitLog, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      }
      const createTime = dayjs
        .unix(stdout.replace("\n", ""))
        .format("YYYY-MM-DD HH:mm:ss");
      resolve(createTime);
    });
  });
}

function getUpdateTime(fileName) {
  return new Promise((resolve, reject) => {
    const gitLog = `git log -1 --pretty=format:"%at" -- "${fileName}"`;
    exec(gitLog, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      }
      const updateTime = dayjs
        .unix(stdout.replace("\n", ""))
        .format("YYYY-MM-DD HH:mm:ss");
      resolve(updateTime);
    });
  });
}

mdFiles.forEach(async (file) => {
  const frontMatterData = await frontMatter(file);
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  data.data = frontMatterData;
  const newContent = matter.stringify(data.content, data.data);
  fs.writeFileSync(file, newContent);
});
