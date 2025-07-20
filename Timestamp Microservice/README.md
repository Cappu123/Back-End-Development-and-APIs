Build a full stack JavaScript app that is functionally similar to this: [https://timestamp-microservice.freecodecamp.rocks](THIS). Working on this project will involve you writing your code using one of the following methods:

Clone [https://github.com/freeCodeCamp/boilerplate-project-timestamp/](this) GitHub repo and complete your project locally.
Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.
Note: Time zones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with new Date() as GMT dates.

Tests
Waiting:1. You should provide your own project, not the example URL.
Waiting:2. A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
Waiting:3. A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
Waiting:4. A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
Waiting:5. Your project can handle dates that can be successfully parsed by new Date(date_string)
Waiting:6. If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
Waiting:7. An empty date parameter should return the current time in a JSON object with a unix key
Waiting:8. An empty date parameter should return the current time in a JSON object with a utc key
