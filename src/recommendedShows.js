import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataCard from './dataCardRecommendedShows';

function RecommendedShows() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = () => {
        axios
            .get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco&page=${page}`)
            .then(res => {
                setItems(prevItems => [...prevItems, ...res.data.events]);
                setPage(prevPage => prevPage + 1);
            })
            .catch(err => console.log(err));
    };

    const handleScroll = (e) => {
        const bottom = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
        if (bottom) loadItems();
    };

    return (
        <div className='hori-scroll' onScroll={handleScroll} style={{ display: 'flex', overflowX: 'scroll' }}>
            {items.map(item => (
                <div key={item.id} style={{ minWidth: '300px', marginRight: '10px' }}>
                    <DataCard data={item} />
                </div>
            ))}
        </div>
    );
}

export default RecommendedShows;
