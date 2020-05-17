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

## Built with

### Backend
* <img width=20 height=20 src="https://expressjs.com/images/favicon.png"> [ExpressJS](https://expressjs.com/) - Web Framework
* <img width=20 height=20 src="https://babeljs.io/img/favicon.png"> [Babel ES5](https://babeljs.io/) - Language Syntax
* <img width=20 height=20 src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/mysql-workbench-icon.png"> [MySQL](https://www.mysql.com/) - Database
* <img width=20 height=20 src="https://yarnpkg.com/icons/icon-48x48.png"> [Yarn](https://yarnpkg.com/) - Package Manager

### Frontend
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 9](https://angular.io/) - Web Framework
* <img width=20 height=20 src="https://www.typescriptlang.org/icons/icon-48x48.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://yarnpkg.com/icons/icon-48x48.png"> [Yarn](https://yarnpkg.com/) - Package Manager
