import {React} from "react";
import {useNavigate} from "react-router-dom"
import { Button, Container, Content, Title, Wrapper } from "../styled_components/OrderSucessStyle";

function OrderSucess (){
    const history=useNavigate()

    function handleRedirectToHomepage(){
        history("/")
    }

    function handleRedirectToOrderDetails(){
        history("/orders")
    }


    return(
        <Container>
            <Wrapper>
                
                <Title>
                    Order Successful!!
                </Title>
                <Content>
                    We have received your purchase and will start processing your order shortly!. Thank you for shopping with Sweet Memories
                </Content>
                <Button onClick={handleRedirectToHomepage}>To Homepage</Button>
                <Button onClick={handleRedirectToOrderDetails}>To Orders</Button>
            </Wrapper>
        </Container>
    )
}

export default OrderSucess