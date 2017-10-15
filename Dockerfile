FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 3001
CMD [ "npm", "start" ]