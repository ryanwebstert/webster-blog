import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import AllArticles from "./components/all-articles";


export default function ArticlesPage() {
    return (
        <main>
            
            <NavBar/>
            <div>
                <h3 style={{margin:'auto', width:'67.9%', paddingTop:'35px', paddingBottom:'35px', fontSize:'24pt'}}>All Articles</h3>
            </div>
            <AllArticles/>
            <Footer/>
        </main>
        
    )
}