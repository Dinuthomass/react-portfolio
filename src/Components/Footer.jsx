
import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import './footer.css'; 

function Footer() {
  return (
    <MDBFooter className='text-center footer'>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3'>
        © 2024 Copyright:
        <a className='footer-link' href='https://mdbootstrap.com/' style={{textDecoration:"none"}}>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
