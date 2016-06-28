# Graceful shutdown

Blog post: https://medium.com/@gchudnov/trapping-signals-in-docker-containers-7a57fdda7d86#.qscgxznqr

```
docker build -t svc . 
docker run -d --name svc -p 3001:3000 -v $PWD:/usr/src/app  svc 
docker logs -f svc
docker kill --signal="SIGTERM" svc
# or
docker stop svc
```
