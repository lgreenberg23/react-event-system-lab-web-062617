// Code Keypad Component Here
import React from 'react'

 class Keypad extends React.Component{

 	printPassword = () => {console.log('Entering password...')}

 	render(){
 		return (<input type="password" onKeyUp={this.printPassword}/>)
 	}
 }

 export default Keypad


// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
