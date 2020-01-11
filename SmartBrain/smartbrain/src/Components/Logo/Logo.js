import React from 'react'; 
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 175, width: 175 }}>
            <div className="Tilt-inner pa3">
                <img style={{paddingTop: '5px'}} src={brain} alt='Logo'></img>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;