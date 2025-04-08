import Hero from "./componants/Hero";
import Highlights from "./componants/Highlights";
import Navbar from "./componants/Navbar";
import Model from "./componants/Model"
import Features from './componants/Features'
import HowItWorks from './componants/HowItWorks'
import Footer from './componants/Footer'

import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
       </main>
  );
}

export default Sentry.withProfiler(App);
