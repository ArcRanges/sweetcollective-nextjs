#!/bin/bash
cd /home/ec2-user/app-frontend
pm2 start npm --name "sweetcollective" -- start
pm2 startup
pm2 save
pm2 restart all