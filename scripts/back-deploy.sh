sudo docker rm -f dorothy
sudo docker rmi dorothy5z/dorothy
sudo docker run --name dorothy -d -p 8080:8080 --network dorothy-network dorothy5z/dorothy:latest
sudo docker image prune -f
sudo rm -rf back-deploy.sh