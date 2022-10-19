# API DOCUMENTATION

1. **Create an .env file with the following constants, where:**
    - PORT : is the port where you go to run your server.
    - DB : is the URI of the mongo database.
    - SECRET_KEY : is the secret key used for JWT
2. **Install the dependencies with npm i**
3. **Run the server with npm run dev (development) or npm start (production)**

## User

| TYPE   | DETAIL         | ROUTE                                  | SEND                                                              |
| ------ | -------------- | -------------------------------------- | ----------------------------------------------------------------- |
| GET    | get all users  | http://localhost:PORT/users            | headers: {token}                                                  |
| GET    | get user by Id | http://localhost:PORT/users/:id        | params : { id } , headers: {token}                                |
| POST   | create an user | http://localhost:PORT/users/create     | body : accept all User Schema                                     |
| PUT    | update an user | http://localhost:PORT/users/update/:id | params : { id }, body : accept all User Schema, ,headers: {token} |
| DELETE | delete an user | http://localhost:PORT/users/delete/:id | params : { id } , headers: {token}                                |

**User Schema**

| KEY            | TYPE                   | REQUIRED   |
| -------------- | ---------------------- | ---------- |
| nickname       | String                 | YES,UNIQUE |
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

| TYPE | DETAIL       | ROUTE                             | SEND                  |
| ---- | ------------ | --------------------------------- | --------------------- |
| POST | login        | http://localhost:PORT/login       | body: email, password |
| POST | renew token  | http://localhost:PORT/renew       | headers : { token }   |
| POST | login Google | http://localhost:PORT/loginGoogle | body: credential      |
| PUT  | forgot Password | http://localhost:PORT/forgot-password | body: email      |
| PUT  | reset Password | http://localhost:PORT/reset-password | headers: {token} body: password |

## Pet

| TYPE   | DETAIL             | ROUTE                                   | SEND                                          |
| ------ | ------------------ | --------------------------------------- | --------------------------------------------- |
| GET    | get all lost pets  | http://localhost:PORT/pets/getAll/:type | params: {Lost}                                |
| GET    | get all found pets | http://localhost:PORT/pets/getAll/:type | params : {Found}                              |
| GET    | get all meet pets  | http://localhost:PORT/pets/getAll/:type | params : {Meet}                               |
| POST   | create a pet       | http://localhost:PORT/pets/newPet       | body : accept all Pet Shema                   |
| PUT    | update a pet       | http://localhost:PORT/pets/update/:id   | params : { id }, body : accept all Pet Schema |
| DELETE | delete a pet       | http://localhost:PORT/pets/delete/:id   | params : { id }                               |

**Filters**
| TYPE | DETAIL | ROUTE | SEND |
| ---- | ------------ | --------------------------------- | --------------------- |
| GET | get all pets lost or found | http://localhost:PORT/pets/getAll/:type?key=value | params :{Found} or{Lost} or {Meet} Query params: Key:{} Value:{} |

**Pet Schema**

| KEY         | TYPE                   | REQUIRED |
| ----------- | ---------------------- | -------- |
| name        | String                 | NO       |
| userId      | Object Ids             | YES      |
| description | String                 | NO       |
| species     | Object Id              | YES      |
| gender      | String enum            | YES      |
| size        | Number enum            | YES      |
| type        | String enum            | YES      |
| breed       | Object Id              | YES      |
| age         | Number                 | NO       |
| color       | String enum            | YES      |
| location    | Object {country: String, lat: Number, long: Number}                 | NO       |
| status      | String enum: StatusPet | NO       |
| date        | Date                   | YES      |
| img         | Array of String        | NO       |
| observation | String                 | NO       |

**ENUMS!**

-   gender: ['Male', 'Female','Unknown']
-   size: ['Small', 'Medium', 'Large']
-   type: ['Lost', 'Found', 'Meet']
-   color: ['White','Black','Brown','LightBrown', 'Grey']
-   StatusPet: ['Active', 'Pause','Deleted']

**Example Routes Pet**

-   http://localhost:PORT/pets/getAll/Found Brings all status Active
-   http://localhost:PORT/pets/getAll/Lost Brings all Status Active
-   http://localhost:PORT/pets/newPet
-   http://localhost:PORT/pets/6334a909f7a60b325e2cb875
-   http://localhost:PORT/pets/update/6334a909f7a60b325e2cb875
-   http://localhost:PORT/pets/delete/6334a909f7a60b325e2cb875
-   http://localhost:4000/pets/getAll/Found?name=asc - Order by name ascendent
-   http://localhost:4000/pets/getAll/Found?name=desc - Order by name descendent
-   http://localhost:4000/pets/getAll/Found?date=asc - Order by date ascendent
-   http://localhost:4000/pets/getAll/Found?name=desc - Order by date descendent
-   http://localhost:4000/pets/getAll/Found?color=Brown - Bring all Found Pets color Brown (color same as ENUM!)
-   http://localhost:4000/pets/getAll/Found?species=6334982abb516339d5f633f2 - Bring all Found pets by species ID: dog
-   http://localhost:4000/pets/getAll/Found?breed=633af4fdd1678bf37ffd0c6c - Bring all Fund pets by breed ID : Mutt
-   http://localhost:4000/pets/getAll/Lost?gender=Male - Bring all Lost pets by gender Male (gender same as ENUM!)
-   http://localhost:4000/pets/getAll/Lost?size=Medium - Bring all Lost pets by size Medium (size same as ENUM!)

## Species

| TYPE   | DETAIL          | ROUTE                                    | SEND                             |
| ------ | --------------- | ---------------------------------------- | -------------------------------- |
| GET    | get all species | http://localhost:PORT/species/all        |                                  |
| POST   | create species  | http://localhost:PORT/species/new        | body : accept all Species Schema |
| DELETE | delete species  | http://localhost:PORT/species/delete/:id | params : { id }                  |

**Species Schema**

| KEY  | TYPE   | REQUIRED   |
| ---- | ------ | ---------- |
| name | String | YES,UNIQUE |

**Example Routes Species**

-   http://localhost:PORT/species/all

## Breed

| TYPE   | DETAIL         | ROUTE                                          | SEND                       |
| ------ | -------------- | ---------------------------------------------- | -------------------------- |
| GET    | get all breeds | http://localhost:4000/breeds/getBreed/:species | params : {id species}      |
| POST   | create breed   | http://localhost:PORT/breed/newBreed           | body : accept Breed Schema |
| DELETE | delete breed   | http://localhost:PORT/breed/delete/:id         | params : { id }            |

**Breed Schema**

| KEY  | TYPE   | REQUIRED   |
| ---- | ------ | ---------- |
| name | String | YES,UNIQUE |

**Example Routes Species**

-   http://localhost:4000/breeds/getBreed/6334982abb516339d5f633f2 Bring all breeds of dog species
