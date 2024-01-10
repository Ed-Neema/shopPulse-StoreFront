import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "@/context/CartContext";


const Header = () => {
  const StyledHeader = styled.header`
    background-color: #222;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  `;
  const NavLink = styled(Link)`
    ${'' /* display: block; */}
    color: #aaa;
    text-decoration: none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
      padding: 0;
    }
  `;
  const StyledNav = styled.nav`
  display: flex;
  gap: .5rem;
  `;
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Link href="/">
            <Image src="/Logo.png" width={100} height={100} />
          </Link>

          <StyledNav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            {/* <NavLink href="/account">Account</NavLink> */}
            <NavLink href="/cart">Cart ({cartProducts.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
