import React from 'react';
import './Notifications.css'
import {getLatestNotification} from './utils'
import closeIcon from './close-icon.png'

function Notifications(){
    return (
    <div class="Notifications">
        <p>Here is the list of notifications</p>
        <button
        style={{
            // display:'inline',
            position:'absolute',
            top:'10px',
            right: '10px'
        }}
        aria-label='Close'
        onClick={console.log("Close button has been clicked")}>
            <img src={closeIcon} alt='Close'/>
        </button>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div>

    )
}

export default Notifications;