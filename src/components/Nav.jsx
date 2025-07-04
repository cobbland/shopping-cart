import { Link } from "react-router-dom";
import SmallCart from "./SmallCart";
import styled from "styled-components";

const NavList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    height: 100%;
    margin: 0;
    padding: 1rem 0;
    align-items: center;
`;

const StyledLink = styled(Link)`

    &:link,
    &:visited {
        text-decoration: none;
        color: inherit;
        padding: 0.4rem 0.7rem;
        border-radius: 20px;
        transition: color 0.2s;
    }
    
    &:hover,
    &:active,
    &:focus {
        color: #84B0C1;
    }

`;

export default function Nav(props) {
    return (
        <div>
            <NavList>
                <li>
                    <StyledLink to="home">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="shop">Shop</StyledLink>
                </li>
                <li>
                    <StyledLink to="cart">
                        <SmallCart number={props.number} />
                    </StyledLink>
                </li>
            </NavList>
        </div>
    )
}