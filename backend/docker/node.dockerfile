FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm i -g pm2@3.5.1 nodemon@1.19.1

RUN npm config set bin-links false
