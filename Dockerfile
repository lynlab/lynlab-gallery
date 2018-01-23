FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

RUN yarn build

CMD ["npm", "start"]
