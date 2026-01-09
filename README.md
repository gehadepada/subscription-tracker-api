# Subscription Tracker Api
A simple Node.js project created to learn the basics of Node.js, Express, and REST APIs , I Watched this crash course to learn nodejs: https://www.youtube.com/watch?v=rOpEN1JDaD0

# My Notes

# Http , IP , Dns

http:is a protocol that defines how data is sent and received between a client and a server. 

ip:is a unique numerical identifier assigned to a device on a network. 

dns:is a system that translates human-readable domain names (such as example.com) into IP addresses.

# Headers , Request Body , Params

headers:Headers are key-value pairs sent with an HTTP request that provide metadata about the request, such as authentication information, content type, and client details. 

request body:The request body contains the actual data sent by the client to the server, usually used to create or update resources. 

params:

1-path parameters:are variables embedded in the URL path that identify a specific resource. 

2-query parameters:Query parameters are optional key-value pairs appended to the URL that are used to filter, search, sort, or paginate results.

# Status Code
200:ok 

201:created successfully

400:bad request 

401:unauthorized 

403:Access denied

404:not found 

429:Too Many Requests 

500:internal server error

# REST API vs GraphQl

# REST API :

Definition: REST (Representational State Transfer) is an architectural style for building APIs. It uses endpoints (URLs) for each resource. Structure: Each resource (like users, posts) has its own URL. HTTP methods define actions: GET → read data POST → create data PUT/PATCH → update data DELETE → delete data Over-fetching / Under-fetching: You may get more data than needed → over fetching Or not enough data → under-fetching Caching: Easy to cache because URLs are predictable.

# GraphQl :

Definition: GraphQL is a query language for APIs that lets clients request exactly the data they need. Structure: Uses a single endpoint (usually /graphql). The client sends a query specifying fields required. Over-fetching / Under fetching: Solves this problem because the client controls exactly which fields to retrieve. Flexibility: You can request data from multiple related resources in a single request. Versioning: No new version is needed when you add new fields clients just request what they want.

# ORM

ORM is a technique that lets you work with a database using objects instead of writing SQL queries directly.

# Arcjet

Arcjet protects your backend from abuse, bots, attacks, and excessive requests before they reach your business logic.

# Middleware

Middleware is a function that runs between the request and the response in a server, used to process, modify, or block requests before they reach the main logic.
