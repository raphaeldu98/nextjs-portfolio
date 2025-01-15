import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="mb-6">
          <Introduction />
        </div>
        <About />
        <div className="sticky top-0 z-20">
          <BackToTop />
        </div>
      </div>
      <Footer />
    </main>
  );
}
