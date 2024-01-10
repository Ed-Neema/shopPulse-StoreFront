import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import Title from "@/components/Title";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Link from "next/link";
import styled from "styled-components";

const CategoryGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
const CategoryTitle = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    color: #888;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CategoryWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ShowAllTile = styled(Link)`
  background-color: #ddd;
  height: 200px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #555;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
`;
const CategoriesPage = ({ mainCategories, categoryProducts }) => {
   
  return (
    <>
      <Header />
      <Center>
        {/* <Title>All Categories</Title> */}
        {mainCategories.map((category) => (
          <CategoryWrapper key={category._id}>
            <CategoryTitle>
              <h2>{category.name}</h2>
              <Link href={"/category/" + category._id}>Show all</Link>
            </CategoryTitle>
            <CategoryGrid>
              {categoryProducts[category._id].map((product) => (
                <ProductBox key={product._id} {...product} />
              ))}
              <ShowAllTile href={"/category/" + category._id}>Show All &rarr;</ShowAllTile>
            </CategoryGrid>
          </CategoryWrapper>
        ))}
      </Center>
      <Footer />
    </>
  );
};

export default CategoriesPage;

export async function getServerSideProps() {
  const categories = await Category.find(); //get all categories
  const mainCategories = categories.filter((category) => !category.parent); // array of objects
  const categoryProducts = {}; //catId =>  [products]
  for (const category of mainCategories) {
    const mainCategoryId = category._id.toString(); //convert MongoDB ObjectIDs to strings.
    const childCategories = categories
      .filter((category) => category?.parent?.toString() === mainCategoryId)
      .map((cat) => cat._id.toString()); //get child categories ids
    const categoriesIds = [mainCategoryId, ...childCategories]; //get all categories ids

    const products = await Product.find({ category: categoriesIds }, null, {
      limit: 3,
      sort: { _id: -1 },
    }); // where, fields (null = all), options
    categoryProducts[category._id] = products;
  }
  return {
    props: {
      mainCategories: JSON.parse(JSON.stringify(mainCategories)), //get parent categories only
      categoryProducts: JSON.parse(JSON.stringify(categoryProducts)),
    },
  };
}
