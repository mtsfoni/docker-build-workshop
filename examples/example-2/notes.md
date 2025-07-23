# Topics

## Users
## Caching
## context & .dockerignore


Challange

Fix the file: 
- Add a user that is not root
- Reduce build time by making it cachable
- Remove debug.txt from docker context

Execute with 

``` sh
"" >> index.js;  docker build -t advanced-docker .
docker run advanced-docker
```