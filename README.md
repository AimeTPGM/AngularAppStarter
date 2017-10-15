# Angular App Starter

a simple web app server that already setup work path for you! 

just open terminal and use the following commands:

``` 
$git clone https://github.com/AimeTPGM/AngularAppStarter.git
$cd ~/path/to/directory/AngularAppStarter
$node app.js & gulp watch
``` 

Then the live-reloadable app will be running on ```localhost:3001``` 

That's it! Enjoy!

# Usage

coming soon

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