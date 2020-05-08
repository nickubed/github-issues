import React from 'react'
import {Link} from 'react-router-dom'

const AllData = props => {
    const handleUpdate = props.setIssue
    if(props.data.length > 0){
    let content = props.data.map((issue, i) => {
        return (
            <div>
                <li key={i}><Link to='/Show' onClick={() => handleUpdate(issue)}>{issue.title}</Link></li>
            </div>
        )
    })
    
    return(
        <div>
            {content}
        </div>
    )
    }
    return (
        <div>
            Nothing!
        </div>
    )
}

export default AllData