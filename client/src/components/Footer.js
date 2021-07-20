import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Footer() {
    return (
    <footer className="mt-5">
    <Container fluid={true}>
        <Row className="border-top justify-content-center p-0 ">
            <div className="p-0" md={3} sm={12}>
                    <div className='p-3 justify-content-center '>
                        <b>
                        <a href="mailto:jovan.m.nixon@gmail.com"  target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/000000/email-sign.png" alt="Email by Icons8" className="icon" /></a></b>
                        <b>
                        <a href='https://www.linkedin.com/in/jovannixon/' target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png" alt="LinkedIn by Icons8" className="icon" /></a></b>
                        <b>
                        <a href='https://github.com/jmnfire' target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub by Icons8" className="icon" /></a></b>
                        <b>
                        <a href='https://docs.google.com/document/d/1azfgrbaMmYW74Wd-jkft5lVqsLgJw8NhHsc1b-vZnKc/edit' target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/000000/attach-resume-female.png" alt="Resume by Icons8" className="icon" /></a></b>
                        <b>
                        <a href='https://open.spotify.com/playlist/4sLCb1NlsLI2vIgVfiW8CI' target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png" alt="Spotify by Icons8" className="icon" /></a></b>
                        
                    </div>
                    <div className="border-top justify-content-center p-10">Hi. This site was made by ™ Jovan Nixon </div>
            </div>
        </Row>
    </Container>
    </footer>
    );
}

export default Footer;
