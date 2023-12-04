# Create React App Intro 12/4/2023

### Creating an App
- yarn create react-app app-name
- yarn start - runs the server
- control + c - stops the server
- don't leave servers running forever
- don't close out terminal tabs without stopping your server
- App.js and App.css handle the bulk of our code


```javascript
import React from 'react'

const App = () => {
  return (
    <h1>Hello world!</h1>
  )
}

export default App
```