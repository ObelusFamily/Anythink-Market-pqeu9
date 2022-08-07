# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1) Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your operating system. This includes the `docker` and `docker-compose` utilities.
    - **Windows Users** should install the **Windows Subsystem for Linux** by opening **Powershell** as an administrator and running `wsl --install` before attempting to run **Docker**
1) Check you have **docker** installed correctly by running `docker -v`
    - If you see a message that says that the `docker` executable cannot be found, you may need to log out and back in again to update your terminal.
    - If you continue to have issues with your system finding the `docker` executable, please consult the [Docker Desktop help text](https://docs.docker.com/desktop/)
1) Check you have **docker-compose** installed correctly by running `docker-compose -v`
    - If you see a message that says that the `docker-compose` executable cannot be found, you may need to log out and back in again to update your terminal.
    - If you continue to have issues with your system finding the `docker-compose` executable, please consult the [Docker Desktop help text](https://docs.docker.com/desktop/)
1) Install [Git](https://git-scm.com/) for your operating system. This will allow you to make a local copy, or *clone* of the files needed to develop this application.
1) Check you have **git** installed correctly by running `git -v`
    - If you see a message that says that the `git` executable cannot be found, you may need to log out and back in again to update your terminal.
    - If you continue to have issues with your system finding the `git` executable, please consult the [Git documentation](https://git-scm.com/doc) 
1) In your terminal, run `git clone https://github.com/ObelusFamily/Anythink-Market-pqeu9` to create a clone of the online repository.
1) Once the clone is complete, run `cd Anythink-Market-pqeu9` to move into the repo's folder.
1) Finally, run `docker-compose up` and ensure that both the **anythink-backend** and **anything-frontend** containers start successfully.

