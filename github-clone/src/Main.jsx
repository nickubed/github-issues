import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Show from './Show'

const Main = props => {
    if(props.content.length > 0){
    return (
        <div>
            <ul>
                {props.content}
            </ul>
        </div>
    )
    }
    return (
        <div>
            <h1>No Articles!</h1>
        </div>
    )
}

export default Main