FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 将项目源代码复制到工作目录
COPY . .

RUN yarn install --no-cache && yarn build

RUN apk add --no-cache nginx

# 将Nginx配置文件复制到镜像中
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/bin/sh", "-c", "yarn serve & nginx -g 'daemon off;'"]
