import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='body'>
         
            <div className="content">
            <p className='text-3xl font-bold mb-7 '>I Grow By Helping People In Need</p>
                <div className="search-container">
                
                    <input type="text" placeholder="Enter your text" className="text-input" />
                    <button className="search-button">Search</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
