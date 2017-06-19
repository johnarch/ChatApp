This ChatApp is a simulation of a well-skinned Slack WebApp for office communication.
It features interaction between four users (John, Paul George & Ringo) as well as a group channel.
As an added feature is that you can simulate the experience of using each of the Beatles' Slack Accounts via
the navigation across the top; using this you can have John send Paul a message, and then go to Paul's account
to read the message and respond.


All state (initial & modified) is kept in the top-root parent app. The state (and key
functions like postChatMessage()) is passed to child components as properties. I would not
normally do this, but I found it more time-efficient then mocking api responses in a redux architecture.


## To run this app:

- clone the directory to your dev environment: git clone https://github.com/johnarch/ChatApp.git

- cd into the new ChatApp directory

- run "npm install". This may take a few minutes.

- run "npm start". The application should launch in a browser window at http://localhost:3000/

