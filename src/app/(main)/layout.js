import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Banner from "../../components/Banner";
import FeaturedImages from "../../components/FeaturedImages";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <Banner />
      <FeaturedImages />
      {children}
      <Footer />
    </div>
  );
}
