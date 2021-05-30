import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon cln</title>
      </Head>
      <Header />
      {/* use 2xl for a bigger  screen  */}
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />

        {/* Footer */}
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
