import React, {Component} from 'react'

class Keypad extends Component {
   onKeyUp = () => (console.log('Entering password...'))
   
   render() {
      return (
         <input type='password' onKeyUp={this.onKeyUp}/>
      )
   }
}

export default Keypad
