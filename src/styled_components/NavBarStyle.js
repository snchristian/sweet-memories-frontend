import {NavLink as Link} from "react-router-dom"
import styled from "styled-components"


export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-item:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#00FFFF;
    }

    
    `