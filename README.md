# Activity Tracker

This is a demo version for a [Qustodio](https://www.qustodio.com/) assignment.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Initial Requirements
Node and npm installed

### `npm i`

Installs all the required modules for running the app & tests
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner (Enzyme + Jest) in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

`src/index.js` is the main entry point of the react application.\
`src/App.js` is the main component, which renderizes the activity list component.\
`src/Activities.js` is the activity list component:
* It contains all the activities info and the functionality to select and to perform.\
* For the not-possible-to-perform activities, it renderizes the modal component.

`src/UnperformedModal.js` is the modal component. Simply lists the activities that cannot be performed.