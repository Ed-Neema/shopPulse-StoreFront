import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
// import { CartContext } from "@/components/CartContext";

const ProductWrapper = styled.div`
  ${"" /* border: 1px solid #d9d9d9; */}
  margin-bottom: 2rem;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 20px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
  img {
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: #444;
  text-decoration: none;
  margin-top: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  margin-top: 1rem;
`;
const cartButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  color: #000;
  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  color: #a514ba;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt={title} />
        </div>

        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>

          <Button
            // block="true"
            onClick={() => addProduct(_id)}
            primary="true"
            outline="true"
            // size="large"
          >
            Add to cart
          </Button>
        </PriceRow>
      </WhiteBox>
    </ProductWrapper>
  );
}
