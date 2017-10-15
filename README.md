# Angular App Starter

a simple web app server that already setup work path for you! 

just open terminal and use the following commands:

``` 
$git clone https://github.com/AimeTPGM/AngularAppStarter.git
$cd ~/path/to/directory/AngularAppStarter
$npm start
``` 

Then the live-reloadable app will be running on ```localhost:3001``` 

That's it! Enjoy!

# Usage

This project is using [AngularJS](https://angularjs.org/), [JADE](http://jade-lang.com/) and [SASS](http://sass-lang.com/)

## Make Your Own Website

Project Structure

```
|- app.js
|- bin
|-- build-css
|-- watch-css
|-- start
|- gulpfile.js
|- node_modules
|- package-lock.json
|- package.json
|- src
|-- index.jade
|-- assets
|--- fonts
|--- js
|--- sass
|- public
|-- index.html
|-- assets
|--- fonts
|--- js
|--- css
```

- ```src/index.jade``` is for adding css and js located in ```src/assets/``` folder
- ```src/views/``` contains view files in .jade type.
- ```src/assets``` folder contains css, js, and fonts for using in the web.
- ```src/assets/js/``` contains js files
- ```src/assets/sass/``` contains sass files.
- ```src/assets/fonts/``` contains fonts

1. open terminal and run the commands above
2. live reload app will be running on ```localhost:3001```
3. use ```src``` folder to modify your website
4. all changes in ```src``` will be automatically compiled and copied to ```public``` folder 

## Docker

**Please Download and Install [Docker](https://www.docker.com) in your machine First**

you can use 

```
docker run -p 3001:3001 -d aimetpgm/angular-app-starter:latest --name angular-app-starter
```

to see the docker example running at ```yourDockerIP:3001```

1. build your docker image by

```
docker build -t <your docker username>/angular-app-starter .
```

or use [Docker Cloud](https://cloud.docker.com) linked with your angular app starter repository in your GitHub

2.  after finish building docker image, run the image by 

```
docker run -p 3001:3001 -d <your docker username>/angular-app-starter:latest --name angular-app-starter
```

3. go to ```yourDockerIP:3001``` that's it!

# Note

if you face the following error

```
Error: listen EADDRINUSE :::3000
```

it means that your node server is still running on port 3000, you could stop the server by running

```
killall -9 node
```

But this will kill **all** node process. If you would like to stop a single process, you can use

```
lsof -i tcp:3000
```

it will display something like this

```
COMMAND   PID     USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    18734 AimeTPGM   13u  IPv6 0x3027a33fa553d9ed      0t0  TCP *:hbci (LISTEN)
```

find the command name *node* then kill the process by PID, for example:

```
kill -9 18734
```

the node process will be completedly killed