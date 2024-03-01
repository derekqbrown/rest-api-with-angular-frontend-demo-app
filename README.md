# rest-api-with-angular-frontend-demo-app

This app uses an Angular/Typescript frontend and a Spring Boot Java backend to allow users to register, login, view, update, delete and add employees to a database. 

To use this, you will need to set up a database which maps to the Employee class found in the 'model' folder. I used PostgreSQL but this can be changed in the application.properties file in the API 'resources' folder. 

To run the application, first you will need to run the API on a server (I used Eclipse IDE and ran as a Java Application). Then run the application frontend (I used VS Code and ran the 'ng serve' command in the terminal). 

The frontend is running on port 4200 while the backend is running on port 8080, both of which can be changed as needed.
