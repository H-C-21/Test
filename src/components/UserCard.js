import { useState } from 'react';
import classes from './UserCard.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';

function UserCard(props){ 

  const [loaddone,setLoaddone] = useState(false);

    const navigate = useNavigate();
    const user = props.user;
    
    
      function laodingHandler(){
      setLoaddone(true)
      }

    function toUserPage(){
      navigate('/users/'+user.id, {state: user})
    }

    return(
      <div className={classes.cardmain}>
      <Card sx={{ maxWidth: 310 }} onClick={toUserPage} style={{minWidth:'200px', backgroundColor: '#181A1B', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.08)',  marginLeft: 'auto', marginRight: 'auto'}}>
        <CardActionArea sx={{border: '2px solid white'}}>
          <CardMedia sx={{display: loaddone ? 'inline' : 'none'}}
          component="img"
          height="180"
          loading='eager'
          src={user.avatar}
          onLoad={laodingHandler}
        />
         {!loaddone && <CardMedia
          component="img"
          height="180"
          src={require('./images.png')}
         
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {user.first_name+' '+user.last_name}
          </Typography>
          <Typography variant="body2" color="white">
            {'@'+user.username}
          </Typography>

          <Typography variant="body2" color="white" sx={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>
            {user.employment.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
         }

export default UserCard;