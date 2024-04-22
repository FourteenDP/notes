import * as glob from "glob";
import fs from "fs";
import matter from "gray-matter";
import dayjs from "dayjs";
import { simpleGit, SimpleGit, SimpleGitOptions } from "simple-git";

export class handleMatter {
  git: SimpleGit;
  files: string[];
  constructor() {
    process.chdir("content");

    const options: Partial<SimpleGitOptions> = {
      baseDir: process.cwd(),
      binary: "git",
      maxConcurrentProcesses: 6,
      trimmed: false,
    };

    this.git = simpleGit(options);

    this.files = glob.sync("**/*.md", {
      ignore: [
        "**/node_modules/**",
        "**/.obsidian/**",
        "**/lib/**",
        "**/assets/**",
      ],
    });
  }
  delExcessMatter(data: any) {
    const newData = {} as any;
    Object.keys(data).forEach((key) => {
      if (data[key] === null || data[key] === undefined || data[key] === "") {
        return;
      }
      if (
        typeof data[key] === "object" &&
        Object.keys(data[key]).length === 0
      ) {
        return;
      }
      if (key === "tags" || key === "aliases" || key === "categories") {
        if (!Array.isArray(data[key])) {
          data[key] = data[key] ? [data[key]] : [];
        }
      } else if (Array.isArray(data[key]) && data[key].length === 0) {
        return;
      }
      newData[key] = data[key];
    });
    return newData;
  }
  async initMatter(data: any, file: string) {
    const title = file.match(/([^/]+)\.md$/)![1];
    const stats = fs.statSync(file);
    let newData = Object.assign({}, data, {
      title: data.title ? data.title : title,
      uid: data.uid ? data.uid : stats.ino,
      archived: data.archived ? data.archived : false,
      tags: data.tags ? data.tags : [],
      aliases: data.aliases ? data.aliases : [],
      categories: data.categories ? data.categories : [],
      createTime: await this.createTime(file),
      updateTime: await this.updateTime(file),
    });

    const keysSort = [
      "title",
      "uid",
      "archived",
      "aliases",
      "categories",
      "tags",
      "createTime",
      "updateTime",
    ];
    const keys = Object.keys(newData).sort();
    keys.sort((a, b) => {
      return keysSort.indexOf(a) - keysSort.indexOf(b);
    });
    newData = keys.reduce((obj, key) => {
      obj[key] = newData[key];
      return obj;
    }, {} as any);

    return Promise.resolve(newData);
  }

  async createTime(file: string) {
    const logs = await this.git.log({ file: file });
    const createTime = logs.all[logs.total - 1].date;
    return dayjs(createTime).format("YYYY-MM-DD HH:mm:ss");
  }

  async updateTime(file: string) {
    const logs = await this.git.log({ file: file });
    const updateTime = logs.all[0].date;
    return dayjs(updateTime).format("YYYY-MM-DD HH:mm:ss");
  }
  async run() {
    for (const file of this.files) {
      const fileContent = fs.readFileSync(file, "utf-8");
      const { data, content } = matter(fileContent);
      let newData = Object.assign({}, data);
      newData = this.delExcessMatter(newData);
      newData = await this.initMatter(newData, file);
      const newContent = matter.stringify(content, newData);
      fs.writeFileSync(file, newContent, "utf-8");
    }
  }
}
