# React Intro 12/1/2023

- React - JavaScript library that creates UI and handles interaction with a user
- Library - collection of code snippets, adds functionality to a project
- Package managers - yarn
- Scalable (to scale an application) - ability for an application to grow and support more and more users
- SPA - single page application, React presents one page, or a single view

### The Two Main Things

- Reusable
  - Components - UI (user interface) and logic into a function that is reusable
  - The structure of React is components
- Handle user interactions really quickly and really efficiently
  - DOM and virtual DOM
  - DOM - document object model, the visual representation of the code
  - JavaScript allows the interaction
  - JavaScript manipulates HTML elements
  - HTML elements present different info
  - Virtual DOM - layer that sits behind the DOM and listens for changes
  - Changes the smallest amount of code that can be changed
  - HTML tags/elements through the lens of the DOM are in a tree-shaped structure and each tag is called a node

### React in HTML

- adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
- JSX - JavaScript XML - marriage of JavaScript and HTML, JSX is what is returned from every component, allows us to insert JavaScript logic to the markup
- JSX fragment - empty tag that acts a container that doesn't add a node to the DOM tree
