import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function CardProduct(props) {
    console.log(props);
    return (

        <Card style={{ width: '15rem'}} className="d-inline-flex m-2" >
            <Card.Img variant="top" src="logo192.png" />
            <Card.Body key={props.Id }>
                <Card.Title>{props.T}</Card.Title>
                <Card.Title>{props.C}</Card.Title>
                <Card.Text>
                    {props.P}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;