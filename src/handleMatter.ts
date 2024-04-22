import * as glob from "glob";
import fs from "fs";
import matter from "gray-matter";
const root = fs.realpathSync(process.cwd() + "/../..");
__dirname = root;
const files = glob.sync("**/*.md", {
  ignore: [
    "**/node_modules/**",
    "**/.obsidian/**",
    "**/lib/**",
    "**/assets/**",
  ],
});

async function delMatter() {
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const { data, content: newContent } = matter(content);
    const newData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => {
        if (key === "tags" || key === "aliases" || key === "categories") {
          return true;
        }
        if (value === null || value === undefined || value === "") {
          console.log("删除了空字段", key, file);
          return false;
        }
        if (Array.isArray(value) && value.length === 0) {
          console.log("删除了空字段", key, file);
          return false;
        }
        if (typeof value === "object" && Object.keys(value).length === 0) {
          console.log("删除了空字段", key, file);
          return false;
        }
        return true;
      })
    );
    Object.keys(newData).forEach((key) => {
      if (key === "tags" || key === "aliases" || key === "categories") {
        if (!Array.isArray(newData[key])) {
          newData[key] = newData[key] ? [newData[key]] : [];
        }
      }
    });
    const newMatter = matter.stringify(newContent, newData);
    if (newMatter !== content) {
      fs.writeFileSync(file, newMatter);
      console.log("删除了空字段", file);
    }
  }
}

async function addMatter() {
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const { data, content: newContent } = matter(content);
    const title = file.match(/([^/]+)\.md$/)![1];
    const stats = fs.statSync(file);
    const newData = Object.assign({}, data, {
      title: data.title ? data.title : title,
      uid: data.uid ? data.uid : stats.ino,
      archived: data.archived ? data.archived : false,
      tags: data.tags ? data.tags : [],
      aliases: data.aliases ? data.aliases : [],
      categories: data.categories ? data.categories : [],
    });
    const newMatter = matter.stringify(newContent, newData);
    if (newMatter !== content) {
      fs.writeFileSync(file, newMatter);
    }
  }
}

export default async () => {
  await delMatter();
  await addMatter();
};
