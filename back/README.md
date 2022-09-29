# API DOCUMENTATION

1. **Create an .env file with the following constants, where:**
    - PORT : is the port where you go to run your server.
    - DB : is the URI of the mongo database.
    - SECRET_KEY : is the secret key used for JWT
2. **Install the dependencies with npm i**
3. **Run the server with npm run dev (development) or npm start (production)**

## User

| TYPE   | DETAIL         | ROUTE                                  | SEND                                           |
| ------ | -------------- | -------------------------------------- | ---------------------------------------------- |
| GET    | get all users  | http://localhost:PORT/users            |                                                |
| GET    | get user by Id | http://localhost:PORT/users/:id        | params : { id }                                |
| POST   | create an user | http://localhost:PORT/users/create     | body : accept all User Schema                  |
| PUT    | update an user | http://localhost:PORT/users/update/:id | params : { id }, body : accept all User Schema |
| DELETE | delete an user | http://localhost:PORT/users/delete/:id | params : { id }                                |

**User Schema**

| KEY            | TYPE                   | REQUIRED   |
| -------------- | ---------------------- | ---------- |
| nickname       | String                 | NO         |
| fullname       | String                 | NO         |
| img            | String                 | NO         |
| password       | String                 | YES        |
| email          | String                 | YES,UNIQUE |
| pets           | Array ObjectId         | NO         |
| isAdmin        | Boolean                | NO         |
| externId       | String                 | NO         |
| email_verified | Boolean                | NO         |
| status         | StatusUser enum String | NO         |

**Example Routes User**

-   http://localhost:PORT/users
-   http://localhost:PORT/users/629375c1545316ac4d6924a9
-   http://localhost:PORT/users/create
-   http://localhost:PORT/users/update/629375c1545316ac4d6924a9
