import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import CanvasWrapper from "./components/CanvasWrapper";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <CanvasWrapper />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
};

export default Sentry.withProfiler(App);
