import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './ProfilePage.css';


const ProfilePage = (props) => {
    return (
        
            props.profile ? 
                <div className="PageContainer">
                    <h1 className="Name">{props.profile.name}</h1>
                    <div className="ImageContainer">
                        <img src={props.profile.picture} alt="Can't Display"></img>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="bio">{props.profile.bio}</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                </div>
            :
            <div className="loading">"Refresh Page"</div>
        
    )
}



export default ProfilePage;
