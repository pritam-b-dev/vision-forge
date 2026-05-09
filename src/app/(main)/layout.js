import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Banner from "../../components/Banner";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <Banner />
      {children}
      <Footer />
    </div>
  );
}
