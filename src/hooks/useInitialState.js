import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [books, setBooks] = useState({ Guardados: [], Tendencia: [], Novedades: [] });

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    return books;
};

export default useInitialState;