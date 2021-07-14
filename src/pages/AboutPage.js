import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

                <Content>
                        <p>Hello. I am Jovan. I don’t like to define myself by the work I’ve done.
                        I define myself by the work I want to do. Skills can be taught,
                        personality is inherent. I prefer to keep learning, continue challenging
                        myself, and do interesting things that matter. Fueled by high energy
                        levels and boundless enthusiasm, I’m easily inspired and more then
                        willing to follow my fascinations wherever they take me. I’m passionate,
                        expressive, multi-talented spirit with a natural ability to entertain
                        and inspire. I’m never satisfied to just come up with ideas. Instead I
                        have an almost impulsive need to act on them.</p>

                        <p>Currently I am attending the University of Denver's Coding Boot Camp
                        program. I want to be the person that makes people want to buy your
                        stuff! Making websites, classic print design, branding and development
                        are my thing. Maybe, even one day, help coach and inspire people to
                        become awesome web developers. After graduating, this certification
                        will provide the skills to hit the ground running. I enjoy the
                        outdoors and traveling as much as possible. I also love seeing the world
                        through my son Odin's eyes.</p>

                        <p>Learning: Computer Science applied to JavaScript Browser Based
                        Technologies (HTML, CSS, JavaScript, jQuery) React Databases (MySQL,
                        MongoDB) Deployment (Heroku, Git) PHP-Laravel Quality Assurance (Writing
                        Tests) Server Side Development (Node.js, Express, MERN Stack)</p>

                        <p>Welcome to my World</p>

                        {/* <p>Linkedin<a href="https://www.linkedin.com/in/jovannixon/" target="blank" rel="noopener noreferrer"> Page</a></p>
                        <p>GitHub <a href="https://github.com/jmnfire" target="blank" rel="noopener noreferrer"> Page</a></p> */}
                        {/* <p>Resume <a href="https://docs.google.com/document/d/1azfgrbaMmYW74Wd-jkft5lVqsLgJw8NhHsc1b-vZnKc/edit" target="blank" rel="noopener noreferrer"> Here</a></p> */}
                        
                </Content>
        </div>
            );
};

export default AboutPage;
