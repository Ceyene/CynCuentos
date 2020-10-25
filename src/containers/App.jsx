import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
    const [books, setBooks] = useState({ mylist: [], trends: [], latestReleases: [] });

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="App">
            <Header />
            <Search />
            {books.mylist.length > 0 &&
                <Categories title="Mis favoritos">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }


            <Categories title="Los más leídos">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Últimos lanzamientos">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
};

export default App;