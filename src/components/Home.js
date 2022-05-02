import React from 'react'
import { Content, ContentWrapper, Headliner, HomeContainer, Image, ImageContainer, InfoContainer, ShopButton, Title } from '../styled_components/HomeStyle'


function Home (){
    

    return (
        <HomeContainer>
            <ContentWrapper>
                <Content>
                    <ImageContainer>
                        <Image><img src="https://cdn.shopify.com/s/files/1/1696/6039/products/LUCKYYOU_10_600x.jpg?v=1615248105" alt="Lollipop Candy"/></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Sweet Memories</Title>
                        <Headliner>Don't you wish you could turn back the hands of time and enjoy some of your favorite candies?  Now here is chance! Click below and take a sweet stroll down memory lane. </Headliner>
                        <ShopButton >Shop Now</ShopButton>
                    </InfoContainer>
                </Content>
            </ContentWrapper>   
        </HomeContainer>
    )
        
}

export default Home