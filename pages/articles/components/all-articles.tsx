import { onValue } from "firebase/database"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { allposts } from "../../../services/firebase"
import styles from '../../../styles/all-articles/AllArticles.module.css'


export default function AllArticles() {
        type Post = {
            id: string,
            author: string,
            title:string,
            text: string
        }
    
    
        const [posts, setPost] = useState<Post[]>()
    
        useEffect(() => {
            onValue(allposts, (snapshot) => {
                const data = Object.entries<Post>(snapshot.val() ?? {}).map(([id, value]) => {
                    return {
                        'id': id,
                        'author': value.author,
                        'title': value.title,
                        'text': value.text
                    }
                })
                setPost(data)
            })
            
        }, [])
        return (
            <div>
                <div className={styles.content}>
                    {posts?.map(post => {
                        return (    
                            <Link href={{
                                pathname: '/articles/[postid]',
                                query: { postid: post.id, title: post.title, text: post.text, author: post.author
                                }
                            }}
                            key={post.id}>
                                <a href='' className={styles.post}>
                                    <Card style={{ width: '100%',  marginTop: '20px'}}>
                                        <Card.Body>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
                                            <Card.Text>{post.text.substring(0, 300)}</Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            
                        )
                    })}
                </div>
            </div>
        );
}