import React from 'react' ; 
import Card from 'react-bootstrap/Card' ;
import Button from 'react-bootstrap/Button';

const CardComponent = ({ id, title, description, image, buttonLabel = "Details" , onButtonClick  }) => {
  return (
    <Card style={{ width:'30rem' , margin:'10px auto'}} key={id}>

        <Card.Img variant="top" src={image} alt={title} />

        <Card.Body style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
        >

          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={ () => onButtonClick(id)}> 
            {buttonLabel}
          </Button>
        </Card.Body>

      </Card>
  );
};

export default CardComponent; 
