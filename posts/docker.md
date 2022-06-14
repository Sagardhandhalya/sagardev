---
title: Docker Concept you need to know
description: docker notes and concept in brife.
date: August 22, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/docker.jpeg
tags: docker
---

### what is a container
the container is a way to package applications, dependency and configuration in the same place.
the place we store this container DOCKER IMAGE to docker hub.

#### container VS images
- container is made from the images, one or more images stack on. one other and made up a container.let say I want container that run my app so I start with Linux image , then node image and my application code image this will make my app container.

- __image is something that you can share, it will be there in you machine, but once you run your image that it will. create a container environment__

- So when you run  __docker ps__ command, you will see container id and the image from the container is created.

#### Docker vs Virtual machine

-  Os made of a layer 
1. Application layer
2. kernel layer

so VM will virtualize both the application layer and the os layer that you have to install another kernal with new VM os. but docker virtualize only one layer that why the docker image is so small.

- So tag line will be docker use the same kernel as host but it will virtualize the application layer.
- docker image will be fast because they do not have to boot a new os 
- you can run any virtual os on any host os but for docker, this is not true you can not run window's images on a Linux host because docker use the same operating system and of course you can not run window on Linux. 

### basic docker command 
1. docker pull redis
- pull a docker image from remote docker repo.

2. docker run redis 
- create container from the image and run it.

3. docker ps
- list all the running container
- "-a " will show all the containers. [docker ps -a]

4. docker images 
- show all images you pulled.

5. docker run -d redis 
- run docker container app in the background, in the detached mode.[work with image]

6. docker stop <container id>
- stop a container

7. docker start <container id>
- start a container [work with container ]

8. docker logs
- see logs of a container

9. docker exec -it
- get terminal of the log file.[it -> interactive  terminal]

### port binding 

So lets you want to run 2 version Postgres database so you run both version's image by default both db service run on port lets say 5000, so you will see by docker ps command that both Postgres run on the same port 5000, how this is possible?
So here port 5000 is container's port not your local machine's port if you make a request on 5000, it will not work so to make this thing work we have to bind our local machine's port to the containers port and you can not bing same port with both container let see with command.

```go
docker run -p<local port>:<container port>
```
 ### docker network

- docker has its own network 
- container connect with each other by name only

1. docker network ls
2. docker network create <name> [create new network in docker ]

to run container in specific network you will provide 
```go
docker run -d
-p 27017:27017
-e MONGO_INITDB_ROOT_USER = sagar
-e MONGO_INITDB_ROOT_USER = password
--net <network name>
--name <name>
mongo
```

### Docker compose
you can write all command to start 10 container In docker comapose yaml file, so you do not have to write again and again.
```go
// docker-compose.yaml
version:"3"
services:
    mogodb:
          image :
          port:
          environments:
```
create image from docker compose
``` docker-compose -f < compose file> up ``` [start all container create a network]
``` docker-compose -f < compose file> up ``` [stop all container and network]

#### docker private registry[ECS]
1. login in repo
2. push image to ECS

image naming in registry : __ registryDomain/imageName:tag__
so you will user this URL to pull a image.

docker push <name of image with domain>
docker tag <old name> <new name>

#### docker volume
- main use of docker volume is for data persistence if you run MongoDB container and create a database add data in them after If you delete a container data will also be deleted to fix this we use Docker Volume.

- how docker volume works, So before we were saving data in container memory so it will lose once you delete that container but in volume case, we mount the host file system location into the container file system and both locations will be in sync. if add something to the host it will be replicated in a docker container so when you delete the container and make it again container will fetch data from the host file system.

- you can create volume by putting -v when you run __dcoker run -v <host path>:<docker path>__ 
1. anonymous volume [just container]
2. name volume [name : container]
3. host volume[host : container]
use named module is always recommended.
__see how you can use volume in compose file__

credit: [Docker tutorial](https://www.youtube.com/watch?v=3c-iBn73dDE&ab_channel=TechWorldwithNana)