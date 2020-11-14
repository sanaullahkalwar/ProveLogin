import React, { Component } from 'react'
import SignInSide from './Components/SigninSide';


export const MyContext = React.createContext();
//export let number = React.createContext(45);

export default class App extends Component {
   


    render() {
        return (
            <div>
                <SignInSide />
           </div>
        )
    }
}
