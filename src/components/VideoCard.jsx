import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card , CardContent, CardMedia } from '@mui/material';


import { demoThumbnailUrl , 
    demoVideoUrl , demoChannelUrl , 
    demoChannelTitle, 
    demoVideoTitle} from './utils/constants';
import CheckCircle from '@mui/icons-material/CheckCircle';

const VideoCard = ({video : { id: { videoId , channelId } , snippet}}) => {
   console.log(videoId , snippet);
  return (
    <Card class sx={{ width: { md:'270px' , xs:'100%' }, height: 300,
    boxShadow:'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
      alt={snippet?.title}
      image={snippet?.thumbnails?.high?.url}
      sx={{ width: { md:'290px' ,xs: '100%', sm: '358px'}, height: 180 }}
      />
      </Link>
      <CardContent sx={{ backgroundColor:'#000000' , height:'106px' ,width: { md:'270px' , xs:'100%' }}}>
      <Link to={videoId ? `/video${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle1'
        fontWeight='bold' color='#FFF'>
          {snippet?.title.slice(0,40) || 
          demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>

      <Link to={snippet?.channelId ? `/channelId${channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2'
        fontWeight='bold' color='grey'>
          {snippet?.ChannelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize:12 , color:"grey", ml:'5px' }}/>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
