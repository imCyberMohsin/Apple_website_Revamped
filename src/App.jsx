import React, { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar";

const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    return (
        <>
            <main className="bg-black">
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero />
                    <Highlights />
                    <Footer />
                </Suspense>
            </main>
        </>
    );
}

export default App;