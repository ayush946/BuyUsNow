import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
import DataCard from './dataCardUpcomingEvents';
import './upcomingEvents.css';

const UpcomingEvents = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    axios
      .get("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming")
      .then((res) => setItems(res.data.events))
      .catch((err) => console.log("Error in initial data fetch: ", err));
  }, []);

  // Simulated data fetching function
  const fetchMoreData = () => {
    axios
      .get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${index}&type=upcoming`)
      .then((res) => {
        const newData = res.data.events; 
        setItems((prevItems) => [...prevItems, ...newData]);
        setHasMore(newData.length > 0);
      })
      .catch((err) => console.log("Error fetching data from API: ", err));
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div class="loader"></div>}
      >
        <div className='cards' >
          {items.map((item) => (
            <div key={item.id} className='data-card'>
              <DataCard data={item} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UpcomingEvents;
