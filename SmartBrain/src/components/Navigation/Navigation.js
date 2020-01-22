import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn) {
        return(
            //home
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                    onClick={() => onRouteChange('signin')}
                    className= 'f3 link dim black underline pa3 pointer'>Sign out
                </p>
            </nav> 
        );
        } else {
            return(
                //signin with sign up
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        onClick={() => onRouteChange('signin')}
                        className= 'f3 link dim black underline pa3 pointer'>Sign in
                    </p>
                    <p 
                        onClick={() => onRouteChange('register')}
                        className= 'f3 link dim black underline pa3 pointer'>Sign up
                    </p>
                </nav> 
            );
        } 
}

export default Navigation;