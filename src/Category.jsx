import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Category(props){
    console.log(props.cat)
    return(
        <>
             <Container style={{marginTop : "30px"}}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="primary" style={{marginLeft:"10px"}} onClick={()=>props.catWisePro('All')}>All</Button>
                        {props.cat.map((v,i)=>{
                            return(
                                <Button variant="primary" style={{marginLeft:"10px"}} onClick={()=>props.catWisePro(v)}>{v}</Button>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Category;