import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromAPI } from "./utils/fetchFromAPI";

const VideoDetails = () => {

  const [videodetail, setvideodetail] = useState(null);
  const [setVideos, setsetVideos] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideodetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideo=${id}&type=video`)
      .then((data) => setVideos(data.items[0]));
  }, [id]);

  if(!videodetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle } ,
statistics:{ viewCount, likeCount} } = videodetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player' controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
              </Stack>
          </Box>
        </Box>
        </Stack>
    </Box>
    
  );
};

export default VideoDetails;
