FROM node:18-alpine3.17 as base

# EXPOSE 8080
# EXPOSE 3000
WORKDIR /src

FROM base as dev
# ENV PORT=8080

COPY package.json yarn.lock server.js emailSender.js ./
RUN  yarn

CMD ["yarn", "run", "watch"]

