import { Product } from "@/models/Product";
import { mongooseConnect } from "./mongoose";

export async function getProducts() {
  const featuredProductId = "653fa09e89ba7e3b2f39c197";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
