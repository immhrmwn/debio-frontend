# build stage
FROM node:14.17.5-buster as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run lint
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
