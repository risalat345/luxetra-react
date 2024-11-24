import Carousel from "./Carousel"
import NewProduct from "./NewProduct"
import '../App.css'
import Navbar from "./Navbar"
import Discount from "./Discount";
import Footer from "./Footer";
import PopularCategories from "./PopularCategories";
import Review from "./Review";

function Home() {

  return (
   <>
<Carousel/>
<NewProduct/>
<Discount/>
<PopularCategories/>
<Review/>
<Footer/>
</>
  )
}
export default Home;