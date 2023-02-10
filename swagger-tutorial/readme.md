# swagger tutorial

## use swagger with Ubuntu/docker
```
$ npm install swagger-ui
```

see:
* https://github.com/swagger-api/swagger-ui/
  * docs


## use swagger with Ubuntu/docker
```
$ cat /etc/issue
Ubuntu 20.04.5 LTS \n \l

$ docker -v
Docker version 20.10.21, build baeda1f

$ docker version
Client: Docker Engine - Community
 Version:           20.10.21
 API version:       1.41
 Go version:        go1.18.7
 Git commit:        baeda1f
 Built:             Tue Oct 25 18:02:21 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.21
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.7
  Git commit:       3056208
  Built:            Tue Oct 25 18:00:04 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.10
  GitCommit:        770bd0108c32f3fb5c73ae1264f7e503fe7b2661
 runc:
  Version:          1.1.4
  GitCommit:        v1.1.4-0-g5fd4c4d
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

$ docker-compose --version
docker-compose version 1.25.0, build unknown

$ docker pull swaggerapi/swaggereditor
$ docker run -d -p 80:8080 swaggerapi/swagger-editor
```