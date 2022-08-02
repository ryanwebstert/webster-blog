import type { NextPage } from 'next'

import Content from './components/content/content';
import NavBar from './components/navbar/navbar';


const Index: NextPage = () => {
  
    return (
      <>
        <main>
            <NavBar/>
            <Content/>
        </main>
        
      </>
      
    );
  }


export default Index
