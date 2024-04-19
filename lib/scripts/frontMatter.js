const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const dayjs = require("dayjs");

const mdFiles = glob.sync("../**/*.md", {
  ignore: ["node_modules/**/*", ".git/**/*", ".obsidian/**/*", "lib/**/*"],
});
console.log(mdFiles);
const frontMatterKeyTransform = {
  title: "标题",
  uid: "uid",
  aliases: "aliases",
  categories: "categories",
  tags: "tags",
  description: "描述",
  cover: "封面",
  cssclasses: "cssclasses",
  author: "作者",
  domain: "域名",
  originalLink: "原文链接",
  createTime: "创建时间",
  updateTime: "更新时间",
};

const frontMatter = (file) => {
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  const frontMatter = {};
  Object.keys(frontMatterKeyTransform).forEach((key) => {
    if (data.data[frontMatterKeyTransform[key]]) {
      frontMatter[key] = data.data[frontMatterKeyTransform[key]];
    } else {
      frontMatter[key] = null;
    }
  });
  return frontMatter;
};

mdFiles.forEach((file) => {
  const frontMatterData = frontMatter(file);
  // 回写文件
  const content = fs.readFileSync(file, "utf8");
  const data = matter(content);
  data.data = frontMatterData;
  const newContent = matter.stringify(data.content, data.data);
  fs.writeFileSync(file, newContent);
});
