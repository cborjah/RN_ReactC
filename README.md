#React Native w/ React Convention Tutorial
## https://reactjs.co/react-native-convention/

##react-native-redux-starter-kit:
https://github.com/mwp-io/react-native-redux-starter-kit

```
Needed for this project:
1) Xcode with iPhone simulator
2) React-native client

```
##Install all packages:
npm i

##To run the project just type in the main directory of the project:
react-native run-ios

```

── src                      # Application source code
   ├── main.js              # Application bootstrap and rendering
   │
   ├── components           # Reusable Presentational Components
   │
   ├── routes               # Main route definitions
   │   ├── index.js         # Bootstrap main application routes with store
   │   ├── Home             # Fractal route
   │   │   ├── index.js     # Route definitions
   │   │   ├── assets       # Assets required to render components
   │   │   └── components   # Presentational React Components
   │   │
   │   └── Counter          # Fractal route
   │       ├── index.js     # Counter route definition
   │       ├── container    # Connect components to actions and store
   │       └── modules      # Collections of reducers/constants/actions
   │
   ├── scenes               # Components that dictate major app structure
   │   ├── router.js        # Scenes wrapper
   │   └── scenes.js        # Scenes definitions
   │
   ├── static               # Static assets
   │
   └── store                # Redux-specific pieces
       ├── createStore.js   # Create and instrument redux store
       └── reducers.js      # Reducer registry and injection

```
