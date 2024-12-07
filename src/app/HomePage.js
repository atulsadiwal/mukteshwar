import CustomConstruction from '@/components/CustomConstruction';
import KeyHighlights from '@/components/KeyHighlights';
import MainSection from '@/components/MainSection';
import NavBar from '@/components/NavBar';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <KeyHighlights />
            <CustomConstruction />
        </>
    );
}

export default HomePage;
