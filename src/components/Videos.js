import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos, justifyContent }) => {
  return (
    <Stack
      direction="row"
      justifyContent={justifyContent}
      alignItems="start"
      flexWrap="wrap"
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
