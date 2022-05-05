import React from 'react';
import profile from '../images/profile.jpg';
import './About.css'

const About = () => {
    return (
        <div className='container mb-5 mt-5'>
            
            <div className='image-container mb-4'>
                <img className='profile-image' src={profile} alt="" />
            </div>
            <h1 className='text-center'>Md Tarikul Islam Sheam</h1>
            <p className='text-center'>Hi, I am Tarikul Islam Sheam. I want to be a Computer Specialist. Now I am on this mission. First of all, I want to gain web system knowledge. Then I will try to learn mobile and computer software engineering. My current goal is to establish myself as a Scientist. Whether it is inside the country or outside the country. I believe nothing is impossible. I like to solve problems. Currently I am studying BSc Electrical and Electrical Engineering. After my graduation I will move my career path either in Software Engineering or Hardware Engineering. </p>
        </div>
    );
};

export default About;