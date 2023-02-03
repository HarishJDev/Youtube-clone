import React from 'react';
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {

  // if(!videos?.length) return 'Loading...';
  return (
    <Stack direction='row' flexWrap='wrap'  alignItems="start"
    justifyContent='start' gap={2} height='100' >
        {videos && videos.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetails={item}/>}
                <ChannelCard channelDetail={item} />
            </Box>
        ))}
    </Stack>
  )
}

export default Videos;