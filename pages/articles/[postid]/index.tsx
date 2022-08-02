
import NavBar from '../../components/navbar/navbar'
import PostBody from './components/post-body'
import styles from '../../../styles/post-page/PostPage.module.css'

export default function Page() {
   
    return (
        <main style={{justifyContent: 'center', display:'flex', flexDirection:'column'}}>
            <NavBar/>
            <PostBody/>
            
        </main>
        
    )
      
    
  }