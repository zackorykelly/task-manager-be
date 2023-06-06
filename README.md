# Task Manager Backend (API Server)

## Initial Setup

### Server
CD into project directory and run `npm i` to install dependencies before running server for the first time.

Create `.env` file in root directory of the project, copying `.example.env` and changing/inputing values as needed.

### Database
Ensure that you have a postgres database running and provide the location and user/pass as per the `.env` file.

## Run Server

Run `npm run dev` to start development server, which will run server on the port specified in `.env`

## Build

Run `npm run build` to build project into /dist directory.