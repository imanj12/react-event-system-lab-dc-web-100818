import React, {Component} from 'react'

class EyesOnMe extends Component {
   whenFocused = () => (console.log('Good!'))

   whenBlurred = () => (console.log('Hey! Eyes on me!'))
   
   render() {
      return (
         <button onFocus={this.whenFocused} onBlur={this.whenBlurred}/>
      )
   }
}

export default EyesOnMe
