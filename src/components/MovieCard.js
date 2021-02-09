import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap/';
import './MovieCard.css'

const MovieCard = ({movieCard, handleItem}) => {
    return (
        <div>
            <Card className="MovieCard" style={{ width: '18rem' }} onClick={()=>handleItem(movieCard.name,movieCard.date)}>
            <Card.Img variant="top" src={movieCard.image} />
            <Card.Body>
                <Card.Title>{movieCard.name}</Card.Title>
                <Card.Text>
                {movieCard.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Rating: {movieCard.rating}</ListGroupItem>
                <ListGroupItem>Date: {movieCard.date}</ListGroupItem>
                <ListGroupItem>Genre: {movieCard.type}</ListGroupItem>
            </ListGroup>
            </Card>
        </div>
    )
}
MovieCard.defaultProps={
    movieCard:{
        image:"https://inland-investments.com/sites/default/files/property/No-Photo-Available.jpg",
        name:"unknown",
        date:"0000"
    }
}
export default MovieCard
