import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '../components/slider.js';
import Filter from '../components/filter.js';
import ListBar from '../components/list-bar.js';

function Home() {
    // const [data, setData] = useState([]);
    // const location = useLocation();

    // useEffect(() => {
    //   const params = new URLSearchParams(location.search);
    //   const type = params.get('type');

    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('/store/find', {
    //         params: { type }
    //       });
    //       setData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    // }, [location]);

    return (
      <div className=''>
        <Filter></Filter>
        <ListBar></ListBar>
        {/* <div>
          {data.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div> */}
      </div>
    );
  
}

export default Home;
