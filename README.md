# Chat-Backend

```start mongodb```

```npm install```

```npm start```

User
====
url: /api/users/

method: **GET**

response: 
```
[{
    "_id": "5b479829149d821d6312254d",
    "name": "oleg",
    "age": 21,
    "__v": 0
},
...,
{
    "_id": "5b4798239d821d6312254d",
    "name": "ivan",
    "age": 22,
    "__v": 0
}]
```

method: **POST**

type: Content-Type/json

name required

body: 
```
{
    "name": "valya",
    "age": 11,
    "emal": "sawds@sd.coe"
}
```

response: 
```
{
    "_id": "5b49b28defa3cb0c6f4c276c",
    "name": "valya",
    "age": 11,
    "__v": 0
}
```

url: /api/users/id

method: **GET**

response:
```
{
    "_id": "5b479829149d821d6312254d",
    "name": "works",
    "age": 11,
    "__v": 0
}
```

url: /api/users/id

method: **DELETE**

response:
```
{
    "n": 1,
    "ok": 1
}
```

url: /api/users/id

method: **PUT**

body: 
```
{
    "name": "valya",
    "age": 11,
    "emal": "sawds@sd.coe"
}
```

response:
```
{
    "name": "valya",
    "age": 11,
    "emal": "sawds@sd.coe"
}
```

Messages
===

url: /api/messages/

method: **GET**

response: 
```
[{
     "_id": "5b47f0d1dd9c6f4e32804e57",
     "senderId": "5b47dd1ba29b5e44409039f3",
     "receiverId": "5b47dcd7a29b5e44409039f0",
     "message": "01789",
     "__v": 0
},
...,
{
     "_id": "5b47f0b1dd9c6f4e32804e57",
     "senderId": "5b47dd1ba29b5e44409039f3",
     "receiverId": "5b47dcd7a29b5e44409039f0",
     "message": "hi",
     "__v": 0
}]
```

method: **POST**

type: Content-Type/json

Fields required: receiverId, senderId, message.

body: 
```
{
    "senderId":	"5b47dd1ba29b5e44409039f3",
    "receiverId": "5b47b42b98303c2c44ed4fb2",
    "message": "hi"
}
```

response: 
```
{
    "_id": "5b49b582c6e1020efc84767f",
    "senderId": "5b47dd1ba29b5e44409039f3",
    "receiverId": "5b47b42b98303c2c44ed4fb2",
    "message": "hi",
    "__v": 0
}
```

url: /api/messages/id

method: **GET**

response:
```
{
    "_id": "5b49b582c6e1020efc84767f",
    "senderId": "5b47dd1ba29b5e44409039f3",
    "receiverId": "5b47b42b98303c2c44ed4fb2",
    "message": "hi",
    "__v": 0
}
```

url: /api/messages/id

method: **DELETE**

response:
```
{
    "n": 1,
    "ok": 1
}
```

url: /api/messages/id

method: **PUT**

body: 
```
{
    "senderId":	"5b47dd1ba29b5e44409039f3",
    "receiverId": "5b47b42b98303c2c44ed4fb2",
    "message": "hello"
}
```

response:
```
{
    "senderId":	"5b47dd1ba29b5e44409039f3",
    "receiverId": "5b47b42b98303c2c44ed4fb2",
    "message": "hello"
}
```

url: /api/messages/receivers/userId

method: **GET**

response:
```
[
    {
        "_id": "5b47dcd7a29b5e44409039f0",
        "name": "lexa",
        "age": 11,
        "__v": 0
    },
    {
        "_id": "5b47b42b98303c2c44ed4fb2",
        "name": "alex",
        "age": 12,
        "__v": 0
    }
]
```

**Error type**
```
{
    "errors": {
        "name": {
            ...
        }
    },
    "message": "",
    "name": ""
}
```
