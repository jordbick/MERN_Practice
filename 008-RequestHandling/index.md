#Express

Express is very similar to Spring
Javascript API framework

Minimalist framework to handle web functionality in node.js applications

Limited functionality, it is customisable through middleware

Middleware - Helps communication between two layers
Client <-> Server

Express gives us a HTTP Request API we can customise - GET, POST, PUT/PATCh, DELETE


#  Request Handling
Specifying what you want the app to do
Express method:
express().get
express().delete
etc..

--- Request Handler -- URL -

Requests - Clients sends us (search queries, id numbers, JSON body)
Response - Server sends the client (database), status codes

The 3 ways to send requests:
- URL params -- id
- Query params -- ?superheroes=superman
- Request body -- JSON