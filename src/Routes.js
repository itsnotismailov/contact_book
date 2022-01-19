import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/con"/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;