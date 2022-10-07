# nodejs_ts-authentication
Simple node.js typescrit postgres with authentication

## Gitpod commands
Preview the port url
``` bash
gp preview $(gp url 3000)
```

Expose a port (start service)
``` bash
gp preview $(gp url 3000)
```

Change port visibility (public for doing calls outside .gitpod)
Preview the url
``` bash
gp preview $(gp url 3000)
```

Stop/Remove Containers
``` bash
docker-compose down
```

## Docker Commands
Run Docker Compose
``` bash
docker-compose up
```

Stop/Remove Containers
``` bash
docker-compose down
```

Connect to psql container
```bash
sudo docker exec -it nodejs_ts_authentication_postgres_1 bash
```

## Primsa Commands
```bash
npx prisma migrate --preview-feature dev
```

## PSQL Commands
```bash
psql db -U root
```

```bash
\c connect to database
\dt  see tables
SELECT * FROM <tablename>;
```

# Primse tutorial
Great Prisma Youtube tutorial
https://www.youtube.com/watch?v=RebA5J-rlwg


