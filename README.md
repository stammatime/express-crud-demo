# express-crud-demo
Basic crud application with in memory udpates

# The Challenge:
Create a REST API using TypeScript and Express.js with CRUD operations on a /widget resource. Instead of spending time configuring a database, please store all data in memory. The express server should include a demonstration of custom middleware in addition to handling permissions based on authorization controls. There is no need to roll your own authentication or integrate with an authentication provider, simply use the data passed in an Authorization header as though it contains the information you would have returned in the token's claims from a successful authentication. Unit and integration tests only need to be present for one of your endpoints. Once you have completed the challenge please share your code via a public repo link.

# The Requirements:
X REST API using TypeScript and Express.js
X CRUD operations for the /widget resource
X An instance of custom express middleware
- Authorization controls on accessing endpoints
- Unit/Func tests

# Useful info

JWT sent in Authorization header, secret is `secretCode`
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5HZXQiOnRydWUsImNhblBvc3QiOnRydWUsImNhblB1dCI6dHJ1ZSwiY2FuRGVsZXRlIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.GzQDgpIOrRT7ET1gnHNNWxFsJv2JfQ0IRTDnBgV2Akk
```
