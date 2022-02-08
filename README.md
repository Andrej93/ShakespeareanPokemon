# ShakespeareanPokemon
It is an 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Structure](#structure)

## General info
The project is single page application that 
	
## Technologies
Project is created with:
* .Net Framework: 6.0
* Node.js version: v16.13.2.

	
## Setup
To run this project, you need to install and run both parts separately

1. React application:
   - you need to install it and run it locally using npm:

    ```
    $ cd ../ShakespeareanPokemon/react-app/
    $ npm install
    $ npm start
    
    - the application is configured to run on http://locahost:3000
    
2. Back-end (.Net Core console application):
  -build the ShakespeareanPokemon.WebApi project
  -after builing you can run the application
  -the application is listening on http://locahost:3001
  
As specified in the React app package.json all the requests from http://locahost:3000 are proxied to http://locahost:3001 if the port 30001 is not available the configuration can be changed in package.json of the React application.


##Structure
The structure of the Solution is devided in two main parts 1.front-end (ReactJS application) and 2.back-end (C# .Net Core console application)
1. The source code of the React application is devided in multiple directories:
  -common (common components used in the root of the application)
  -helpers (helper functions and configurations)
  -pages (every page main components)
  -routes (router configuration and routing)
  -store (redux store and async actions to the APIs)
  -styles 
2. The source code of the Back-end is consisted of multiple projects:
  -ShakespeareanPokemon.WebApi (we APIs)
  -ShakespeareanPokemon.Entities (all the entities used in by the APIs are defined here)
  -ShakespeareanPokemon.Test (xUnit testing project) 
  
  for more complex project i would add aditional project for DataLayer and Business Logic.
  
  
  
  
  
  


  
