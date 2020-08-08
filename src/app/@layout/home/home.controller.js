import React from 'react';
import HomeView from './home.view';

export function Home() {
    const pageTitle = 'Home page';

    return <HomeView ctrl={{ pageTitle }} />;
}
