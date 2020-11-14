import React, { Component } from 'react'
import {MyContext} from './App';
import './App.css'

export default class Guest extends Component {
    render() {
        return (
            <div className="bg">
            <div className="App">
                <h1>GUest COmponent Used Throgh ContextAPI</h1>
                <MyContext.Consumer>
                    {data=> <h4>Name: {data.name} Age: {data.Age} EmployeID: {data.EmpId}</h4>}
                    
                </MyContext.Consumer>
            </div>
            </div>
        )
    }
}
