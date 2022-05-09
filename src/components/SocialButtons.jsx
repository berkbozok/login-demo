import React from 'react';
import {Link} from "react-router-dom";


function SocialButtons() {
  return (
    <div className="entry-social">
      
      <br/>
      <br/>
      <br/>
      <div className="fb">
        <Link to="/facebook">
          Facebook
          </Link>
      </div>
      <div className="gplus">
      <Link to="/google">
          Google
          </Link>
      </div>
      <div className="linkedin">
         <Link to="/linkedin">
          Linkedin
          </Link>
      </div>
    </div>
  );
}
export default SocialButtons;