FROM node:14.16.0

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start"]

