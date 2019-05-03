import React, {Component} from 'react'
import {Button} from 'reactstrap'
import logo from './../../../logo.svg'
import './../../../App.css'

export default class Startingapp extends Component {
    render() {
        return (
            <body className="bg-dark2">
                <div >
                    <center left="50%" top="50%">
                    <img src={logo} className="App-logo"/>
                    </center>
                    <center left="50%" top="50%">
                    <Button className="start" color="warning">start</Button>
                    </center>
                </div>
            </body>
        )
    }
}