# syntax=docker/dockerfile:1
FROM node:10
WORKDIR /code 
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:dev"]