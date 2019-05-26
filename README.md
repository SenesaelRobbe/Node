# Node API
## General
I used the ES5 modules instead of the ES6 modules (which wasn't best practice), should I revisit the project this should be the first thing that I change. The database connection and the server for the were added. I was also able to query to the database.
## Routes
Following routes were implemented, GET & POST to /login, which find the user and logs him in or add an user respectively. There's also a POST to /article which adds an article to the Database.

## Database Connection
In the database connection I've mainly follow the same practices as in class however, I've chosen to use a connectionPool instead of a regular connection. After each query, I release the connection that was used instead of ending it (how we usually do this). After some research, I've come to believe the regular connection could be deprecated and is a bit slower in performance (after testing I haven't noticed a noticeable difference, probably because I was only sending a minimal of requests).
