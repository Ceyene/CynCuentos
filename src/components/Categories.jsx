import React, { Children } from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
    <div className="categories">
        <h3 class="categories__title">Elegir al azar</h3>
        {children}
    </div>
);

export default Categories;