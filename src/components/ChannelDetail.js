import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromApi } from '../util/fetchFromApi';

function ChannelDetail() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  console.log('hell', channelDetails);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'gray', zIndex: 10, height: '300px' }} />
        <ChannelCard marginTop="-95px" channelDetail={channelDetails} />
      </Box>
      <Box p={2}>
        <Videos justifyContent="center" videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
