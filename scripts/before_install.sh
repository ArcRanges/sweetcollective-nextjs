#!/bin/bash
cd /home/ec2-user/app-front-end
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
sudo nvm install 16.13.0
sudo nvm install node