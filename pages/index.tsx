import type { NextPage } from 'next'
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Banner from './components/banner/banner';

import Content from './components/content/content';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';


const Index: NextPage = () => {
  
  const [show, setShow] = useState(true);

    return (
      <>
        <main>
            <NavBar/>
              <Alert show={show} variant="warning" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Hello</Alert.Heading>
              <p>
                This site is under development, thank you for understanding.
              </p>
            </Alert>
            
            <Banner/>
            <Content/>
            <Footer/>
        </main>
        
      </>
      
    );
  }



  
export default Index
