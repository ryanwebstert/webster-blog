import type { NextPage } from 'next'
import Banner from './components/banner/banner';

import Content from './components/content/content';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';


const Index: NextPage = () => {
  
    return (
      <>
        <main>
            <NavBar/>
            <Banner/>
            <Content/>
            <Footer/>
        </main>
        
      </>
      
    );
  }



  
export default Index
