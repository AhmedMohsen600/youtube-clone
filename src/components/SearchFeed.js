import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromApi } from '../util/fetchFromApi';
import { useParams } from 'react-router-dom';

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log('search', searchTerm);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos justifyContent="flex-start" videos={videos} />
    </Box>
  );
}

export default SearchFeed;
