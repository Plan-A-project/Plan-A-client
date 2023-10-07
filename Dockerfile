FROM public.ecr.aws/docker/library/node:17.8.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM public.ecr.aws/docker/library/nginx

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

