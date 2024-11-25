import Carousel from "./Carousel"
import NewProduct from "./NewProduct"
import '../App.css'
import Discount from "./Discount";
import Footer from "./Footer";
import PopularCategories from "./PopularCategories";
import Review from "./Review";

function Home() {

  return (
   <>
   <div className="mx-4">
    
<Carousel/>
<NewProduct/>
<Discount/>
<PopularCategories/>
<Review/>
<Footer/>
   </div>
</>
  )
}
export default Home;