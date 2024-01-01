FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV VITE_API_BASE_URL='http://34.36.231.196'
COPY . ./
RUN npm run build

FROM nginx:latest as deploy
RUN rm -f /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
