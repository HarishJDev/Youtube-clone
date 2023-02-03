import React from 'react';
import { Box,CardContent,CardMedia,Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from '@mui/material';

import { demoProfilePicture } from './utils/constants';

const ChannelCard = ( {channelDetail} ) =>(
  <></>
  // <Box sx={ {boxShadow:'none' , borderRadius: '20px'}}>
  //   <Link to={`/channel/${channelDetail?.id?.channelId}`}>
  //     <CardContent sx={{ display:'flex' , flexDirection:'column' , justifyContent:'center'
  //   , textAlign:'center' , color:'#fff' }}>
  //     <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
  //     alt={channelDetail?.snippet?.title}
  //     sx={{ borderRadius:'50%' , height:'180px' , width:'180px' }}/>
  //     </CardContent>
  //   </Link>
  // </Box>
)


export default ChannelCard

////////////////////////////////////////////////////////


