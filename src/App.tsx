import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Location from './sections/Location';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-charcoal-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
