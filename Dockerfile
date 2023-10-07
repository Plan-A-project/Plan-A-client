FROM public.ecr.aws/docker/library/node:17.8.0 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM public.ecr.aws/docker/library/nginx:mainline-alpine3.18-slim

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

