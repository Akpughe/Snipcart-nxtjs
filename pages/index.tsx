import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { IProduct } from '../components/Product';
import Footer from '../components/Footer';
import Head from 'next/head';
import '../styles.scss'
interface IIndexProps {
  products: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="NzI2NmMyYTUtMDc1YS00M2VlLWEzZDQtNDNlNjNhNmRmOWRmNjM3MTkzNTgxMDMyNTg4NzU2"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  );
};
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: 'nextjs_hoddie',
        name: 'Purpose Hoddie',
        price: 25.0,
        image: 'https://theexplorersshop.com/126-big_default_2x/purpose-hoodie-grey.jpg',
        description:
          'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.'
      },
      {
        id: 'nextjs_shirt',
        name: 'Purpose Tour',
        price: 19.0,
        image: 'https://dhgkpqsiufwl2.cloudfront.net/media/ShopDesignSplit4/logo/.fkcXA8RV/ShopDesign-916/Purpose-Tour.png',
        description:
          'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.'
      } as IProduct,
    //   {...ProductList},
    
    ]
  };
};
export default Index;
