# React
# What is React
- It's not MVC
- Built to solve complex UI and its data that changes over time

# What was the problem?
- A large scale app has views hooked with multiple models. It's hard to track all the actions taken by models. 
-

# Components
## createClass
- creates a new component class
- Must have render()

## React.Children
- holds several helper functions
- Lets you work easily with this.props.children 
- Takes care of inner elements

## React.createElement
- Create Dom element

## React.createFactory
- call createElement on a given ReactElement type. 

## React.render
- Takes in ReactElement and render it to the DOM. 

## React.Copmonent
- Main building blocks of React app
- Components are created either by extending React.Component or use React.createClass
- When setState is called, you queu the new object into the React update queue. You should never manipulate state with this.state
- ReactClassComponent, ReactClassMixin are not available when using ES6.