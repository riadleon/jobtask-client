import React from 'react';
import { Outlet } from 'react-router-dom';
import FormEdit from '../pages/FormEdit/FormEdit';
import Home from '../pages/Home/Home';

const Main = () => {
    return (
        <div >
            <Outlet></Outlet>

        </div>
    );
};

export default Main;