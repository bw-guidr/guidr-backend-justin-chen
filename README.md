## Guidr - Justin Chen (Back-End)

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] `cd` into the root of the project and run `yarn` to install dependencies.
- [ ] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

Helpful Tip on Testing this Project:

- [ ] **TEST** this project using **`INSOMNIA`**.

#### Endpoints

User endpoints

- **/POST** ```/user/register```
- **/POST** ```/user/login```
- **/GET** ```/user/:id/trips``` to get all trips by userId
- **/POST** ```/user/:id/trips``` to add a trip to userId

Trips endpoints

- **/GET** ```/trips/all``` to get all trips by all users
- **/GET** ```/trips/:id``` to get trips by tripId
- **/POST** ```/trips``` to add a trip
- **/PUT** ```/trips/:id``` to update a trip by tripId
- **/DEL** ```/trips/:id``` to delete trip by tripId

#### Database Schemas

The _Database Schemas_ for the `users` and `trips` resources are:

##### Users

| field     | data type        | metadata                                            |
| --------- | ---------------- | --------------------------------------------------- |
| id        | unsigned integer | primary key, auto-increments, generated by database |
| username  | string           | required, unique                                    |
| name      | string           | required                                            |
| password  | string           | required                                            |

##### Trips

| field      | data type        | metadata                                            |
| -------    | ---------------- | --------------------------------------------------- |
| id         | unsigned integer | primary key, auto-increments, generated by database |
| user_id    | text             | required, must be the `id` of an existing `user`    |
| title      | text             | required                                            |
| trip_type  | string           | not required                                        |
| date       | string           | required                                            |
| location   | text             | required                                            |
| miles      | unsigned integer | required                                            |
| description| text             | required                                            |
