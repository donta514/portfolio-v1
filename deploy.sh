#!/bin/bash
cd /var/www/portfolio-v1/astro
npm install
npm run build
sudo systemctl restart nginx
echo "Deployment complete!"

