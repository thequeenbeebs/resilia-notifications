# RESILIA NOTIFICATIONS
### Blaire Baker

## Installation Instructions
* Clone both this repo and the backend (https://github.com/thequeenbeebs/resilia-api) onto your computer
* Open the resilia-api folder and run `bundle install` to install all gems
* Set up the database by running `rails db:create`, `rails db:migrate`, and `rails db:seed`
* Start the server by running `rails s`. The server should be directed to localhost:3000.
* Go back to this folder: open resilia-notifications and run `npm install`
* Run `npm start`; you will be prompted to run the app on another port because 3000 is full, so type `y` for yes

## Technologies Used
* Front-end: JavaScript/React 
* Back-end: Ruby on Rails
* Database: PostgresQL

## Requirements
* frontend should request notifications from an API (fetch request from resilia-api)
* notifications​ should be housed in a persistent store (stored in state with useState hook)
* persistent store that can survive the API server restarting (localStorage)
* notification​ objects contain arbitrary domain data along with attributes that allow it to function as a “notification” a user is intended to receive (notification model has message attribute, along with user_id that it belongs to)

## Future Goals
* Enter username to see notifications
* Using Authentication and a login rather than just hard coding a user
* Testing
* Use custom React component for notifications 