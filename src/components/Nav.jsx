import { Link } from "react-router-dom";
import SmallCart from "./SmallCart";
import styled from "styled-components";

const NavList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
`;

const StyledLink = styled(Link)`

    &:link {
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
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