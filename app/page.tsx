import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Achievements from "./components/Achievements";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Introduction />
        <About />
        <Achievements />
        <div className="sticky top-0 z-10">
          <BackToTop />
        </div>
      </div>
    </main>
  );
}
