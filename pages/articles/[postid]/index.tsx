
import NavBar from '../../components/navbar/navbar'
import PostBody from './components/post-body'
import styles from '../../../styles/post-page/PostPage.module.css'
import Footer from '../../components/footer/footer'

export default function Page() {
   
    return (
        <main style={{justifyContent: 'center', display:'flex', flexDirection:'column'}}>
            <NavBar/>
            <PostBody/>
            <Footer/>
        </main>
        
    )
      
    
  }