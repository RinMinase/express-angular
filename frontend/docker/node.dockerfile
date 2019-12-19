FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm i -g @angular/cli@7.3.9 pm2@3.5.1

RUN npm config set bin-links false
