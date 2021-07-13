import React from 'react'
import tracker from '../assets/images/trail.jpeg'
import brew from '../assets/images/beer.jpeg'
import weather from '../assets/images/weather1.jpeg'
import me from '../assets/images/IMG_2676.jpeg'
import Card from '../components/Card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {

                    id:0,
                    title: 'Trail Finder',
                    subTitle: 'Project 1',
                    imgSrc: tracker,
                    link: 'https://cwhirl.github.io/trail-finder/',
                    selected: false
                },
                {

                    id: 1,
                    title: 'You\'re My Boy Brew',
                    subTitle: 'Project 2',
                    imgSrc: brew,
                    link: 'https://afternoon-sands-66827.herokuapp.com/',
                    selected: false
                },
                {

                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'Project 3',
                    imgSrc: weather,
                    link: 'https://jmnfire.github.io/06-Server-Side-APIs-Weather-Dashboard/',
                    selected: false

                },
                {

                    id: 3,
                    title: 'Me',
                    subTitle: 'GitHub',
                    imgSrc: me,
                    link: 'https://github.com/jmnfire',
                    selected: false

                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default Carousel;