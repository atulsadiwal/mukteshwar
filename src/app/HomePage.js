import React from 'react';
import NavBar from '@/components/NavBar';
import MainSection from '@/components/MainSection';
import About from '@/components/About.js';
import KeyHighlights from '@/components/KeyHighlights';
import CustomConstruction from '@/components/CustomConstruction';
import StickySocial from '@/components/StickySocial';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <About />
            <KeyHighlights />
            <CustomConstruction />
            <StickySocial />
            <Footer />
        </>
    );
}

export default HomePage;
