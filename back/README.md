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

**Enums Used**

-   enum StatusUser {
    NotVerified = 'Not Verified',
    Active = 'Active',
    Banned = 'Banned',
    Deleted = 'Deleted',
    }

## Authenticacion

| TYPE | DETAIL      | ROUTE                       | SEND                  |
| ---- | ----------- | --------------------------- | --------------------- |
| POST | login       | http://localhost:PORT/login | body: email, password |
| POST | renew token | http://localhost:PORT/renew | headers : { token }   |

## Pet

| TYPE   | DETAIL             | ROUTE                                 | SEND                                          |
| ------ | ------------------ | ------------------------------------- | --------------------------------------------- |
| GET    | get all lost pets  | http://localhost:PORT/pets/:type      | params: {Lost}                                |
| GET    | get all found pets | http://localhost:PORT/pets/:type      | params : {Found}                              |
| POST   | create a pet       | http://localhost:PORT/pets/newPet     | body : accept all Pet Schema                  |
| PUT    | update a pet       | http://localhost:PORT/pets/update/:id | params : { id }, body : accept all Pet Schema |
| DELETE | delete a pet       | http://localhost:PORT/pets/delete/:id | params : { id }                               |

**Pet Schema**

| KEY         | TYPE                   | REQUIRED |
| ----------- | ---------------------- | -------- |
| name        | String                 | NO       |
| userId      | Object Id              |YES,UNIQUE|
| description | String                 | NO       |
| species     | Object Id              | NO       |
| gender      | String enum            | NO       |
| size        | Number enum            | NO       |
| type        | String enum            | YES      |
| breed       | Object Id              | NO       |
| age         | Number                 | NO       |
| color       | String enum            | NO       |
| location    | String                 | NO       |
| status      | String enum: StatusPet | NO       |
| date        | Date                   | NO       |
| img         | Array of String        | NO       |
| observation | String                 | NO       |

**Example Routes Pet**

-   http://localhost:PORT/pets/Found
-   http://localhost:PORT/pets/Lost
-   http://localhost:PORT/pets/newPet
-   http://localhost:PORT/pets/6334a909f7a60b325e2cb875
-   http://localhost:PORT/pets/update/6334a909f7a60b325e2cb875
-   http://localhost:PORT/pets/delete/6334a909f7a60b325e2cb875

**ENUMS!**

-   gender: ['Male', 'Female','Unknown']
-   size: ['Small', 'Medium', 'Large']
-   type: ['Lost', 'Found']
-   color: ['White','Black','Brown','LightBrown', 'Grey']
-   StatusPet: ['Active', 'Pause','Deleted','Meet']

## Species

| TYPE   | DETAIL          | ROUTE                                    | SEND                             |
| ------ | --------------- | ---------------------------------------- | -------------------------------- |
| GET    | get all species | http://localhost:PORT/species/all        |                                  |
| POST   | create species  | http://localhost:PORT/species/new        | body : accept all Species Schema |
| DELETE | delete species  | http://localhost:PORT/species/delete/:id | params : { id }                  |

**Species Schema**

| KEY  | TYPE   | REQUIRED |
| ---- | ------ | -------- |
| name | String | YES      |

**Example Routes Species**

-   http://localhost:PORT/species/all
-   http://localhost:PORT/species/new
-   http://localhost:PORT/species/delete/63349820bb516339d5f633f0


