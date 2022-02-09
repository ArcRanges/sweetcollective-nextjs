#!/bin/bash
cd /home/ec2-user/app-frontend
# npm run build
pm2 delete 0
pm2 start "npm run start" --name sweetcollective
pm2 startup
pm2 save
pm2 restart all