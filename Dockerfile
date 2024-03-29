FROM public.ecr.aws/docker/library/node:17.8.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
