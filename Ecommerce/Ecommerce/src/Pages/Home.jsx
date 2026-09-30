import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import OfferBanner from "../components/OfferBanner";

function Home() {

  const products = [
    {
      id: 1,
      name: "Mobile",
      price: 15000,
      image:
        "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Shoes",
      price: 999,
      image:
        "https://via.placeholder.com/200"
    }
  ];

  return (
    <>
      <Navbar />

      <OfferBanner />

      <div className="hero">
        <h1>Buy Nearby Products First</h1>
      </div>

      <div className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;