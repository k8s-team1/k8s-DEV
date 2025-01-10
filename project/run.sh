#!/bin/bash

echo "Cleaning up existing containers if any..."
docker rm -f mongodb backend frontend 2>/dev/null

echo "Starting MongoDB container..."
docker run -d --name=mongodb -p 17017:27017 --restart=always --network=devapp-net sushijin/mongodb:3.1

echo "Starting Backend container..."
docker run -d --name=backend --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_DB_ADDR=mongodb:27017 sushijin/backend:10.15

echo "Starting Frontend container..."
docker run -d --name=frontend -p 3000:8000 --network=devapp-net --restart=always -e PORT=8000 -e GUESTBOOK_API_ADDR=backend:8000 sushijin/frontend:10.15

echo "All containers started successfully!"

