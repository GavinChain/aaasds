#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build
npx vitepress build

## 拉取模板

git clone git@gitee.com:qve/vitepress-template.git

# 进入生成的文件夹
cd .vitepress/dist

git init
git add -A

git remote add git@gitee.com:qve/vitepress-template.git

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:qve/vitepress-template.git master

cd -
