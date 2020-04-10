import React from 'react';
import landingImg from '../../pictures/landingImg.jpg'
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    state = {  }
    render() { 
      return ( 
          <div>
              <img src={landingImg} alt='cat pic'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link 
                className = 'start-button'
                to= '/adoption'
                >Let's Get Started!</ Link>
          </div>
        
       );
    }
  }
   
export default Landing