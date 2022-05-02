import styled from 'styled-components'

export const HomeContainer = styled.div`
width:100%;
height:100vh;
display:flex;
background-color:pink
`

export const ContentWrapper = styled.div`
    height:100%
    
`
export const Content = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
`
export const ImageContainer = styled.div`
    height:100%;
    flex:1;
`
export const Image = styled.div`
    height:80%;
     img{
         width:100%;
         background-color: transparent;
         padding-top:20px;
         

     }
`
export const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
export const Title = styled.h1`
    font-size:70px;
`

export const Headliner = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`

export const ShopButton = styled.button`
    padding:10px;
    font-size:20px;
    background-color: #FFA07A;
    cursor:pointer;

`