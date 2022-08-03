

const styles = {
    footer: {
        marginTop: "40px"
    }
}

export default function Footer() {
    return (
        <footer className="text-center text-lg-start bg-white text-muted border-top" style={styles.footer}>  
            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Ryan Webster
                            </h6>
                            <p>
                                This is my website made in NextJS with Bootstrap and Firebase
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                            <p><a target="_blank" rel="noopener noreferrer" href="mailto:webstertrajano2003@gmail.com" className="text-reset">webstertrajano2003@gmail.com</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/ryanwebstert" className="text-reset">GitHub</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-webster-601054244/" className="text-reset">Linkedin</a></p>
                            
                        </div>

                    </div>

                </div>
            </section>
        </footer>
    )
}