import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Integrations from './components/Integrations';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Dashboard />
        <Pricing />
        <Integrations />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;