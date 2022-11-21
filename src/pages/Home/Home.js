import React from 'react';
import '../../global.scss';
import Form from 'react-bootstrap/Form';
import './Home.scss';
import Tags from '../../pages/product/ticket/Tags/Tags';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row m-auto">
          <div className="m-flex">
            
              <div>
                <Tags />
              </div>
            
          </div>
          <div className="home_bg"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
