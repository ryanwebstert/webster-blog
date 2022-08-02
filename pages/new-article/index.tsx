import NavBar from "../components/navbar/navbar";
import { FormEvent, useState } from "react";
import {  push, ref } from "firebase/database";
import { database } from "../../services/firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/new-article/NewArticle.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import Alert from 'react-bootstrap/Alert'

export default function NewArticle() {
    const [show, setShow] = useState(false);

    
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    function Publish(event: FormEvent) {
        setShow(true)
        event.preventDefault()
        

        const postData = {
            title: title,
            author: author,
            text: text,
        };
        push(ref(database, 'posts/'), {
            title: postData.title,
            author: postData.author,
            text : postData.text
          });
        
          

    }

    
    return (
        <>
            <NavBar/>
            <div className={styles.content}>
                <h1 style={{margin: "20px 0 40px 0"}}>New Article</h1>
                
                <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Congratulations!</Alert.Heading>
                    <p>
                        Your article has been published successfully! Now everyone can see him
                    </p>
                </Alert>

                <Form onSubmit={Publish}>
                    <Form.Group className="mb-3" controlId="Title">
                        <input id={styles.title} type="text" className={styles.text} placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Author">
                        <input id={styles.author}type="text"  className={styles.text} placeholder="Author" value={author} onChange={event => setAuthor(event.target.value)} required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Text">
                        <TextareaAutosize id={styles.text} className={styles.text} placeholder="Text Here" minRows={5} value={text} onChange={event => setText(event.target.value)} required/>
                            
                    </Form.Group>
                    
                    <div className="text-center">
                        <Button variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </div>
                    
                </Form>
            </div>
            
        </>
    )
}