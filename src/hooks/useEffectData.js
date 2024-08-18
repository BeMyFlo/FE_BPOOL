import { useState, useEffect } from 'react';
import axios from '../service/axiosConfig';

export const useFetchData = (url, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};