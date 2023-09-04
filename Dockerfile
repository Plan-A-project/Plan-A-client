FROM public.ecr.aws/docker/library/node:18

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "start"]