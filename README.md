# Project REST-Rant

REST-Rant is an app where users can review restaurants.

1. "As a **restaurant customer**, I need **an online menu** so I can **browse available dishes and make informed dining choices**."

2. "As a **restaurant manager**, I need **inventory management tools** so I can **track ingredient quantities and order supplies effectively**."

3. "As a **restaurant chef**, I need **recipe storage and organization** so I can **quickly access and prepare dishes during service**."

4. "As a **restaurant staff member**, I need **POS (Point of Sale) software** so I can **process orders, accept payments, and manage transactions efficiently**."

5. "As a **restaurant patron**, I need **accessible parking** so I can **easily visit the restaurant without hassle**."




| Method | Path          | Purpose                                |
| ------ | ------------- | -------------------------------------- |
| GET    | /             | Home page                              |
| GET    | /places       | Places index page                      |
| POST   | /places       | Create new place                       |
| GET    | /places/new   | Form page for creating a new place     |
| GET    | /places/:id   | Details about a particular place       |
| PUT    | /places/:id   | Update a particular place              |
| GET    | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id   | Delete a particular place              |


| name         | city          | state   | cuisines           | pic      |
| ------------ | ------------- | ------- | ------------------ | -------- |
| The Rusty Spoon | New York      | NY      | Italian            | https://example.com/restaurant1.jpg |
| Delicious Bites | Los Angeles   | CA      | Mexican            | https://example.com/restaurant2.jpg |
| Cozy Corner   | Chicago       | IL      | American           | https://example.com/restaurant3.jpg |
| Spice Fusion  | Houston       | TX      | Indian             | https://example.com/restaurant4.jpg |
| Ocean Blue    | Miami         | FL      | Seafood            | https://example.com/restaurant5.jpg |
