### `A React based web application to list the members and their associated events with features such as booking an event and filtering the list.`

The application will have the following specifications.

### Fetch a list of [members](https://next.json-generator.com/api/json/get/NyNrlJTX8) and [events](https://next.json-generator.com/api/json/get/Vk7OTypQ8) (you can use [Json Generator](https://next.json-generator.com) to generate your own data).

### `Items must contain:`

- Member: name, age, phone, email, company
- Event: organizer, company, about, scheduled for, duration, capacity.

### `Members LIST:`

- List must support the ability to sort by age/name and both with (ascending, descending).
- List must support the delete member.
- Each member must have “locate on calendar” action (which will highlight the events he is registered for)
- Every Member should have the ability to add an event (select an event from the list of events)
- Each Member should have a number of Events he/she is signed up for.

### `Events LIST:`

- Every event should have the ability to show the capacity status
- Every Event should have “toggle display” button (that will hide/show Event’s marker on the calendar).

### `FILTERS Specifications:`

- Please apply the filters to the members and events components.
- When members are filtered, events should be filtered accordingly (display events that are assigned to members that weren’t filtered).
- Please make you progress is properly conveyed through git commit history .

### **This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
