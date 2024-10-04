import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const BrakingNews = () => {
    // Add news fetching logic here
    const [newses, setNewses] = useState([])
    useEffect(()=>{
        fetch('BreakingNews.json')
        .then(response => response.json())
        .then(data => setNewses(data))
    },[])
    return (
        <div className='flex items-center bg-[#F3F3F3] p-3 mt-3 rounded-xl '>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee>
                {
                    newses.map(news => <p className='mr-9 font-bold' key={news.uuid}>{news.title}</p>)
                }
                
            </Marquee>
        </div>
    );
};

export default BrakingNews;