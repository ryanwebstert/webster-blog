import { useRouter } from 'next/router'
import styles from '../../../../styles/post-page/PostPage.module.css'


export default function PostBody() {
    const router = useRouter()
    const {author, title, text} = router.query
    return (
        <main className={styles.content}>
            <div className={styles.head}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.author}>{author}</p>
            </div>
            
            <div >
                <p className={styles.text}>{text}</p>
            </div>

        </main>
    )
}