# entrance-80
监听80端口，需 root 启动，无依赖。
https://github.com/linux-remote/linux-remote/wiki/letsencrypt-SSL-%E8%AF%81%E4%B9%A6%E7%94%9F%E6%88%90

## Gen
./certbot-auto certonly --webroot --agree-tos --email hezedu@hotmail.com --webroot-path /opt/entrance-80/certbot-web-root -d demo.linux-remote.org

## root
cp /etc/letsencrypt/archive/demo.linux-remote.org/cert1.pem /opt/linux-remote/ssl/demo.linux-remote.org/cert.pem
cp /etc/letsencrypt/archive/demo.linux-remote.org/privkey1.pem /opt/linux-remote/ssl/demo.linux-remote.org/privkey.pem

chown linux-remote /opt/linux-remote/ssl/demo.linux-remote.org/privkey.pem


## Renew
./certbot-auto renew

90天有效期。需在过期前 30 天内 renew.


