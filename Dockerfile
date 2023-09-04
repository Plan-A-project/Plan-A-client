FROM public.ecr.aws/docker/library/node:17.8.0

WORKDIR /app

COPY ./package.json /app

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]
