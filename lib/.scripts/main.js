const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const dayjs = require("dayjs");
const crypto = require("crypto");

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
    if (key === "createTime") {
      frontMatter[key] = dayjs(stat.birthtime).format("YYYY-MM-DD HH:mm:ss");
    }
    if (key === "updateTime") {
      frontMatter[key] = dayjs(stat.mtime).format("YYYY-MM-DD HH:mm:ss");
    }
    if (key === "uid") {
      frontMatter[key] = stat.ino;
    }
  });
  return frontMatter;
};

mdFiles.forEach((file) => {
  const frontMatterData = frontMatter(file);
  const content = fs.readFileSync(file, "utf8");
  // 判断是否有重复的uid
  // const uid = frontMatterData.uid;
  // const uidFiles = mdFiles.filter((f) => {
  //   const frontMatterData = frontMatter(f);
  //   return frontMatterData.uid === uid;
  // });
  // if (uidFiles.length > 1) {
  //   console.error(`uid: ${uid} 重复`);
  //   // 输出文件名
  //   console.error(uidFiles);
  // }
  const data = matter(content);
  data.data = frontMatterData;
  const newContent = matter.stringify(data.content, data.data);
  fs.writeFileSync(file, newContent);
});
