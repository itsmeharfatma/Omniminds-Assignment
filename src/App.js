import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <Testimonial />
      <section className="bg-[#1d2228] sm:px-14 px-8 sm:pt-16 pt-12 pb-12">
        <Footer />
      </section>
    </main>
  );
};

export default App;
