const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const dayjs = require("dayjs");

// 设置根目录
const root = path.resolve(__dirname, "../../");
__dirname = root;
process.chdir(root);
const mdFiles = glob.sync("**/*.md", {
  ignore: ["node_modules/**/*", ".git/**/*", ".obsidian/**/*", "lib/**/*"],
});
fs.writeFileSync(
  path.resolve(__dirname, "lib/.scripts/mdFiles.json"),
  JSON.stringify(mdFiles, null, 2)
);
const frontMatterKeyTransform = {
  title: "title",
  uid: "uid",
  aliases: "aliases",
  categories: "categories",
  tags: "tags",
  description: "description",
  cover: "cover",
  cssclasses: "cssclasses",
  author: "author",
  domain: "domain",
  originalLink: "originalLink",
  createTime: "createTime",
  updateTime: "updateTime",
};

const frontMatter = (file) => {
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  const frontMatter = {};
  const stat = fs.statSync(file);
  Object.keys(frontMatterKeyTransform).forEach((key) => {
    if (data.data[frontMatterKeyTransform[key]]) {
      frontMatter[key] = data.data[frontMatterKeyTransform[key]];
    } else {
      frontMatter[key] = null;
    }
    // 获取文件信息

    if (key === "createTime" && !frontMatter[key]) {
      frontMatter[key] = dayjs(stat.birthtime).format("YYYY-MM-DD HH:mm:ss");
    }
    if (key === "updateTime" && !frontMatter[key]) {
      frontMatter[key] = dayjs(stat.mtime).format("YYYY-MM-DD HH:mm:ss");
    }
  });
  return frontMatter;
};

mdFiles.forEach((file) => {
  const frontMatterData = frontMatter(file);
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  data.data = frontMatterData;
  const newContent = matter.stringify(data.content, data.data);
  fs.writeFileSync(file, newContent);
});
