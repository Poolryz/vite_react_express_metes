/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
export default function NavCatalogComponent({ catalog, setNameProduct, ...props }) {
    return (
        <nav className="nav-catalog">
            <ul className="nav-catalog__list">
                {catalog.map(item => {
                    return (
                        <li onClick={() => {
                            setNameProduct(item.name)
                        }} key={item.name} className="nav-catalog__item">{item.name}</li>
                    )
                })}
            </ul>
        </nav>
    )
}