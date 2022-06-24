FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install --only=prod&& mkdir /oby-system && mv ./node_modules ./oby-system

WORKDIR /oby-system

COPY . .

RUN npm run build