import styles from '../../../styles/Banner.module.css'

export default function Banner() {
    return (
        <div className={styles.content}>
            <div className='container-md' style={{position: 'absolute', width: '50%'}}>
                <h1 className='display-1 fw-normal'>The tech blog <br/> made for  you</h1>
                
            </div>
            
            <video autoPlay muted loop className={styles.video}>
                <source src='/blog-video.mp4' type='video/mp4'/>
            </video>
        </div>
    )
}