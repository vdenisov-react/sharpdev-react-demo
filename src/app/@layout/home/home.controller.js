import React from 'react';
import HomeView from './home.view';

export function Home() {
    const pageTitle = 'Hello, friend!';

    return <HomeView ctrl={{ pageTitle }} />;
}
