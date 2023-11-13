import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({el}) {
  return (
    <div>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={el.url} className='img'/>
      <Card.Body>
        <Card.Title >{el.nom}</Card.Title>
        <Card.Text>
        <h5>{el.Nationalite}</h5>
         <p><h5>{el.equipe}</h5></p>
         <p><h5>num maillot:{el. numm}</h5></p>
         <p><h5>age:{el.age}</h5></p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Player
