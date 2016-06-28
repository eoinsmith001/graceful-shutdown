FROM alpine:3.3
RUN apk add --update nodejs \
    bash
RUN npm install -g nodemon
RUN mkdir -p /usr/src/app
WORKDIR      /usr/src/app
COPY .       /usr/src/app
EXPOSE 3000
ENTRYPOINT [ "./run.sh" ]
