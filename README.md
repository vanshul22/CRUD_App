# CRUD_App
===================================

CRUD App with the help of Express JS and MongoDB.  
Its a APIs are how your application informs your database of what functions to perform. 
These functions can be modeled in different ways but they are designed to perform four basic CRUD operations; Create, Read, Update, Delete.
------------------------

Working of this project ()=>{
------------------------

*   To run this file please import this in your system.
*   Please hit "npm install" in terminal where this directory located.
*   Make Sure Mongodb server running in background.
*   To hit requests you have to hit "http://localhost:9000/persons".
*   GET : http://localhost:9000/persons
*   POST : http://localhost:9000/persons | Please send json parameters in this schema ()=>
    { "name": "vanshul", "programming_language": "Python", "age": 23, "have_job": true }.
*   PATCH : http://localhost:9000/persons:id_number_here | Please send json parameters any of this schema ()=>
    { "name": "vanshul", "programming_language": "Python", "age": 23, "have_job": true }.
*   DELETE : http://localhost:9000/persons:id_number_here | It will delete a particular id person.

}
