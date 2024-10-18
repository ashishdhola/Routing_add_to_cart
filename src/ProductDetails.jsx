import Axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FaStar } from "react-icons/fa";
function ProductDetails(){
    let pp = useParams();
    console.log(pp);
    let [singleProduct,setSingleProduct] = useState({})
    let [star,setStar] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            getSingleProduct();
        },1000)
    },setSingleProduct);

    let getSingleProduct = () =>{
        Axios.get("https://fakestoreapi.com/products/"+pp.id)
        .then((res)=>{
            console.log(res.data);
            let st = Math.floor(res.data.rating.rate);
            let ss = [];
            for(var i=1; i<=st; i++){
                ss.push(i);
            }
            setStar(ss);
            setSingleProduct(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    return(
        <>
        <Container>
            <Row className="justify-content-md-center">
            
                <Col>
                    <img src={singleProduct.image} height={500}/>
                </Col>
                <Col >
                    <h3>{singleProduct.title}</h3>
                    <Badge bg="secondary">₹{singleProduct.price}</Badge>
                    <p>{singleProduct.description}</p>
                    <p>Rating:
                        {star.map((v,i)=>{
                            return(
                                <FaStar style={{color:"blue"}}/>
                            )
                        })}

                    </p>
                    {singleProduct.rating?
                        singleProduct.rating.count>0?
                        <span style={{color:"green"}}>Available</span>
                        :
                        <span style={{color:"red"}}>Out of Stock</span>
                    :""}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ProductDetails;