import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/router";

const Header = () => {
  const StyledHeader = styled.header`
    background-color: #fff;
    margin-bottom: 1px;
  `;

  const MainWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
  `;
  const Wrapper = styled.div`
    position: sticky;
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
  const StyledLink = styled(Link)`
    color: #a514ba;
    font-weight: 600;
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
  // checking if the current path is the same as the link path
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <StyledHeader>
      <Center>
        <MainWrapper>
          <Wrapper>
            <Link href="/">
              <Image src="/Logo.png" width={100} height={100} />
            </Link>

            <StyledNav>
              {currentPath === "/" ? (
                <StyledLink href="/">Home</StyledLink>
              ) : (
                <NavLink href="/">Home</NavLink>
              )}
              {currentPath.includes("/product") ? (
                <StyledLink href="/products">All products</StyledLink>
              ) : (
                <NavLink href="/products">All products</NavLink>
              )}

              {currentPath.includes("/categor") ? (
                <StyledLink href="/categories">Categories</StyledLink>
              ) : (
                <NavLink href="/categories">Categories</NavLink>
              )}

              {currentPath.includes("cart") ? (
                <StyledLink href="/cart">
                  Cart ({cartProducts.length})
                </StyledLink>
              ) : (
                <NavLink href="/cart">Cart ({cartProducts.length})</NavLink>
              )}
            </StyledNav>
          </Wrapper>
        </MainWrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
