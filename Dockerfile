FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 将项目源代码复制到工作目录
COPY . .

RUN yarn install --no-cache && yarn build

CMD ["yarn", "serve"]

# 使用官方的Nginx镜像作为基础镜像
FROM nginx:1.25-alpine

# 将Nginx配置文件复制到镜像中
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动Nginx
ENTRYPOINT ["nginx -g 'daemon off;'"]
