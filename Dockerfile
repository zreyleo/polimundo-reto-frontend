FROM node:latest

COPY [".", "/usr/src/"]
WORKDIR /usr/src/
RUN corepack enable
RUN yarn install
EXPOSE 4173
CMD ["yarn", "serve"]