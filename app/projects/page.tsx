import Navbar from "../components/NavBar";
import BackToTop from "../components/BackToTop";
import Projects from "../components/Projects"
import Footer from "../components/Footer";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
            <Projects />
            <div className="sticky top-0 z-20">
            <BackToTop />
            </div>
        </div>
        {/* <Footer /> */}
      </main>
    );
  }