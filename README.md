# Express-Angular

## Steps to Run

1. Install Docker or Docker Toolbox
2. Copy both env files and set them accordingly
    ```
    cp .env.example .env
    cp /backend/.env.example .env
    ```

    Root ENV contains the docker environmental variables, while `backend` ENV contains back-end runtime environmental variables.

3. Create the docker image
    ```
    docker-compose up -d
    ```

### Back-end

1. SSH into the docker container and run the code
    ```
    docker exec -it express bash
    npm start
    ```

### Front-end

1. SSH into the docker container and build the code
    ```
    docker exec -it angular bash
    npm start
    ```
