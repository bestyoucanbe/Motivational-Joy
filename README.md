This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Eventbrite API`

To access Activities for this App from Eventbrite, you need to have their authorization token to access their API. To do this:

1.  Obtain an authorization token from Eventbrite (https://www.eventbrite.com/platform/).
2.  Create a keys.js file containing the following line of code:
    export const eventBriteAuthToken = "PlaceEventBriteTokenHere" //Eventbrite API Token
3.  Replace the "PlaceEventBriteTokenHere" with the token you obtained.
4.  Add the keys.js file in your gitignore file.

### `J-SON Server`

Start a persistent database by starting a json-server at port 1717. Execute the following in the terminal (examples are bashrc/zshrc):

json-server -p 1717 -w database.json
