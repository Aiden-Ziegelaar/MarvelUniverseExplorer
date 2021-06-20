#  Woodside Dev Challenge

## Running the Project

Make sure you populate the .env file from .env.example and substitute in a valid API key.
```
npm install
npm run start
```

## Interesting Bits

### Component Reuse
This project attempts to reuse components as much as possible, for example there is one of each 
ItemCard, CardList, DetailsPage and SearchableCardList components that service multiple underlying 
datatypes.

### Interface Inheritance
Many of the types can be derived from a base interface, which is exactly what is going on in the src/Types 
folder.

### Testing
Time was a little limited whilst completing this project so only a few tests have been included. If I had
more time I would like to have included MSW based tests for components that use the API directly. There are
some tests that use fast forwarding timers though which I think is neat.

### Stories
The code to display the stories datatype is there, however due to the awful quality of the data
it is commented out.

### Theming
In the interests of getting the project done I didn't dive too deeply into theming. I would have
liked to spend some more time defining my theme and replacing all the static colour references 
that are sprinkled throughout the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.