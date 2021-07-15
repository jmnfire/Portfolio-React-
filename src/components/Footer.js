import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Person, Mail } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Footer() {
    return (
    <footer className="mt-5">
    <Container fluid={true}>
        <Row className="border-top justify-content-between p-0 ">
            <div className="p-0" md={3} sm={12}>
                    <div className='p-3 justify-content-center'>
                        <b>
                        <Mail className='icon'/>
                        <span><a href="mailto:jovan.m.nixon@gmail.com" target='_blank' rel="noreferrer">Let's Connect</a></span></b>
                        <b>
                        <LinkedInIcon className='icon'/>
                        <span><a href='https://www.linkedin.com/in/jovannixon/' target='_blank' rel="noreferrer">Linkedin</a></span></b>
                        <b>
                        <GitHubIcon className='icon'/>
                        <span><a href='https://github.com/jmnfire' target='_blank' rel="noreferrer">GitHub</a></span></b>
                        <b>
                        <Person className='icon'/>
                        <span><a href='https://docs.google.com/document/d/1azfgrbaMmYW74Wd-jkft5lVqsLgJw8NhHsc1b-vZnKc/edit' target='_blank' rel="noreferrer">Resume</a></span></b>
                        <b>
                        <MusicNoteIcon className='icon'/>
                        <span><a href='https://open.spotify.com/playlist/4sLCb1NlsLI2vIgVfiW8CI' target='_blank' rel="noreferrer">Music</a></span></b>
                        
                    </div>
            </div>
            <Col className="p-3 d-flex justify-content-end" md={3}>
            This site was made by Jovan Nixon.
            </Col>
        </Row>
    </Container>
    </footer>
    );
}

export default Footer;
