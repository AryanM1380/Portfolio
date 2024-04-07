import React from 'react';
import './personalInfo.css'; 
import me from '../assert/me.jpeg';

const PersonalInfo = () => {
    return (
        <div className="personal-info-container" style={{ marginTop: '20px' }}>
            <div className="image-container">
                <img src={me} alt="Aryan Mohammadi" style={{ borderRadius: '50%' ,color:'white'}} />
            </div>
            <div className="about-me">
                <h2 style={{ borderRadius: '50%' ,color:'white'}}>Aryan Mohammadi</h2>
                <br/>
                <p style={{ textAlign: 'justify' ,fontSize:'20px' , color:'white'}}>
                I am Aryan Mohammadi, a passionate junior developer with a focus on Computer Applications.
                Currently, I'm on an exciting journey at Hamk University, pursuing my Bachelor's degree to deepen my expertise in the world of technology.
                <br/>
                <br/>

                Throughout my time at the university, I've actively collaborated on various group projects with fellow developers. 
                These experiences have shown me the true value of effective teamwork and have driven me to achieve remarkable results. 
                Together, let's shape a brighter future through technology! Join me on this journey!
                </p>
                <br/>
            </div>
        </div>
    );
}

export default PersonalInfo;
