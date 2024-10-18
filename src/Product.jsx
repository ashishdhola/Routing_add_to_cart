import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';


function Product(props){
    return(
            <>
                <Container style={{marginTop : "30px"}}>
                    <Row>
                        {props.pro.map((v,i)=>{
                            return(
                                <Col style={{marginBottom:"10px"}}>
                                  <Link to={"/productdetails/"+v.id} style={{textDecoration:"none"}}><Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src={v.image}  height={150}/>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            {v.description.substring(0,40)}...
                                            </Card.Text>

                                            
                                            <Badge bg="secondary">₹{v.price}</Badge>
                                            <p>Rating: {v.rating.rate}</p>
                                            
                                            <Button variant="primary">View</Button>

                                        </Card.Body>
                                    </Card></Link>  
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
    )
}

export default Product;