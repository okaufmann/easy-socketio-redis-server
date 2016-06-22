# easy-socketio-redis-server
Easiest Pusher alternative with socket.io and redis.

You are searching for a open source alternative for pusher? You want it as simple as possible?
Here you are:

1. Install a new Server with nodejs and redis (or use [Laravel's Forge](https://forge.laravel.com) Service which will setup the server for you)

2. Install Node v4 or later

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
```

3. Pull this repo in a directory where you want to run your Socket.io Server (ex. /home/forge/)

4. Start your server with
```
sudo node server.js
```

Optional:
5. Grab a SSL Certificate from your favourite certificate authority (ex. Let's Encrypt) and save them as `server.crt`(Signed Cert) and `server.key`(Key)


Special Thanks to:
- [Manuel Strebel](https://twitter.com/bluesheep_eu)
