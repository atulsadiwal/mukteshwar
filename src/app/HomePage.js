import React from 'react';
import NavBar from '@/components/NavBar';
import MainSection from '@/components/MainSection';
import About from '@/components/About.js';
import KeyHighlights from '@/components/KeyHighlights';
import CustomConstruction from '@/components/CustomConstruction';
import StickySocial from '@/components/StickySocial';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <About />
            <KeyHighlights />
            <CustomConstruction />
            <StickySocial />
        </>
    );
}

export default HomePage;
