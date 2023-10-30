import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;
// takes the latest 10 products
export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Products</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
