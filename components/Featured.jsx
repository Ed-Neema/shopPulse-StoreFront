import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import ButtonLink from "./ButtonLink";
import { CartContext } from "@/context/CartContext";

const Featured = ({product}) => {
  const Bg = styled.div`
    background-color: #fff;
    color: #222;
    padding: 50px 0;
  `;
  const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  `;
  const Desc = styled.p`
    color: #333;
    font-size: 1rem;
    margin-top:.5rem;
  `;
  const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img {
      max-width: 100%;
      max-height: 200px;
      display: block;
      margin: 0 auto;
    }
    div:nth-child(1) {
      order: 2;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: 1.1fr 0.9fr;
      div:nth-child(1) {
        order: 0;
      }
      img {
        max-width: 100%;
      }
    }
  `;

  const Column = styled.div`
    display: flex;
    align-items: center;
  `;
  const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
  `;
//   console.log(product)
const { addProduct } = useContext(CartContext);
function addFeaturedToCart() {
  addProduct(product._id);
}
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title> {product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonLink>
                <Button
                  white="true"
                  size="large"
                  onClick={addFeaturedToCart}
                >
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <Image src="/Featured.png" width={750} height={750} />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
