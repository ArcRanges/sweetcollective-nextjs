#!/bin/bash
cd /home/ec2-user/app-frontend
pm2 npm --name "sc-app" -- start
pm2 startup
pm2 save
pm2 restart all