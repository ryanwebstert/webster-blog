import type { NextPage } from 'next'
import { DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject, useState } from 'react';
import { Alert, Button, Modal, ModalProps } from 'react-bootstrap';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
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
            <Alert variant="warning" onClose={() => setShow(false)} >
              <Alert.Heading>Olá</Alert.Heading>
                <p>
                  Este site está em desenvolvimento. Agradeço sua visita.
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
