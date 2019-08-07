cd client && yarn install && yarn build && cd .. && rm -rf server/dist && mv client/dist server && forever stopall && forever start ./server/index.js
