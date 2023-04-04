import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  //   if (!loadedProduct) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productID = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productID);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithparams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithparams,
    fallback: "blocking",
  };

  // paths => is data pre-generated
  //  this method, data not all contain in paths, if data not in paths they generated just in time
  //  fallback: "blocking" => wait data to load finish and show.
  //  fallback: true => not wait data finish. programmer should handle this in component (ex. if (!loadedProduct))

  // this method data should have in paths
  // fallback: false => If data not in paths it error 404
}

export default ProductDetailPage;
