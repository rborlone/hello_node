FROM node:alpine
EXPOSE 80
COPY server.js .
CMD ["node", "server.js"]