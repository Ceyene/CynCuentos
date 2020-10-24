import React from 'react';
import '../assets/styles/components/Search.scss';

const mainTitleText = '¿Qué vas a leer hoy?';
const mainInputPlaceholder = 'Buscar libros...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{mainTitleText}</h2>
        <input className="input" type="text" placeholder={mainInputPlaceholder} />
    </section>
);

export default Search;