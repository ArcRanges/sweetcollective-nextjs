#!/bin/bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
sudo nvm install 16.13.0
sudo nvm install node
sudo npm i -g pm2
sudo npm i -g next