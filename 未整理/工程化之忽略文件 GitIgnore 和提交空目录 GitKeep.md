---
标题: 工程化之忽略文件 GitIgnore 和提交空目录 GitKeep
描述: null
封面: null
uid: 20240123112807356
aliases: []
tags:
  - 计算机/工程化
  - 计算机/工程化/Git
  - 忽略文件
  - 提交空目录
  - .gitignore
  - .gitkeep
cssclasses: null
创建时间: 2023-05-14T10:40:09.000Z
更新时间: 2024-01-22T16:57:31.000Z
---

# 工程化之忽略文件 GitIgnore 和提交空目录 GitKeep

## 忽略文件 GitIgnore

在使用 Git 管理项目时，我们经常需要忽略一些文件或目录，以防止它们被提交到仓库中。例如，我们可能希望忽略编译生成的二进制文件、日志文件或包含敏感信息的配置文件。为了实现这一目的，我们可以使用 `.gitignore` 文件来指定要忽略的文件和目录

下面为常用忽略文件例子:

```ini
# Logs
# 日志
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
# 编辑器目录和文件
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

node_modules
.DS_Store
dist
*.local
```

## 提交空目录 GitKeep

在使用 Git 时，添加一个空目录，通过 git status 和 git diff 都无法查看到修改记录。问题原因是 Git 不跟踪目录仅跟踪文件变动，这个时候只需要在空目录下创建 `.gitkeep` 文件

**`.gitkeep` 是一个约定俗成的文件名并不会带有特殊规则**
