FROM node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json /home/node/app

USER node

RUN yarn

COPY --chown=node:node . /home/node/app

RUN yarn
RUN yarn workspaces run build
RUN yarn upgrade