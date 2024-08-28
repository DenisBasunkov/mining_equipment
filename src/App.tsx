import { About } from "./component/About/About"
import Advantages, { Block_Contact_Us } from "./component/Advantages/Advantages"
import { Banners } from "./component/Banner/Banner"
import Bestsellers from "./component/Bestsellers/Bestsellers"
import Categories from "./component/Categories/Categories"
import { Contacts } from "./component/Contacts/Contacts"
import Footer from "./component/Footer/Footer"
import { Header, HeaderNav, MenuMobile } from "./component/Header/Header"



function App() {

  return (
    <>
      <Header />
      <HeaderNav />
      <MenuMobile />
      <div className="Content">
        <Banners />
        <Categories />
        <Advantages />
        <Bestsellers />
        <About />
        <Block_Contact_Us />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default App
