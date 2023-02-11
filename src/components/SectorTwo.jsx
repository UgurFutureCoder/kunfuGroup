import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

  
  const card = (name, adj, about) => (
    <React.Fragment>
      <CardContent sx={{
           
      }}>
        <Typography sx={{
            fontFamily: 'Inter'
        }} variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ color: `#FF0000`,mb: 1.5 }} color="text.secondary">
          {adj}
        </Typography>
        <Typography sx={{
            color: `#666666`
        }} variant="body2">
          {about}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
  export default function SectorTwo() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid sx={{
            marginTop: 4,
        }} container spacing={3}>
        <Grid sx={{
        minWidth: 200,
        minHeight: 300,
        }} item xs>
        <Card sx={{
            borderRadius: 5,
            ":hover": { 
                borderColor: `#FF0000`,
                transform: 'translateY(-2px)',
                cursor: 'pointer'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        }} variant="outlined">{card('WEB', 'For Web apps', 'Any complexity from lightweight layout to complex applications')}</Card>
        </Grid>
        <Grid   sx={{
        minWidth: 200,
        minHeight: 300
        }}
        item xs>
        <Card sx={{
            borderRadius: 5,
            ":hover": { 
                borderColor: `#FF0000`,
                transform: 'translateY(-2px)',
                cursor: 'pointer'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        }}  variant="outlined">{card('MOBILE', 'For Mobile apps', 'Mobile apps for our buisnes')}</Card>
        </Grid>
        <Grid  sx={{
        minWidth: 200,
        minHeight: 300
        }}
        item xs>
        <Card sx={{
            borderRadius: 5,
            ":hover": { 
                borderColor: `#FF0000`,
                transform: 'translateY(-2px)',
                cursor: 'pointer'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        }}  variant="outlined">{card('TELEGRAM', 'For Telegram Oauth and Bots', 'Telegram Bots (helper) for your shop or individual use')}</Card>
        </Grid>
        <Grid  sx={{
        minWidth: 200,
        minHeight: 300
        }}
        item xs>
        <Card sx={{
            borderRadius: 5,
            ":hover": { 
                borderColor: `#FF0000`,
                transform: 'translateY(-2px)',
                cursor: 'pointer'
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        }}  variant="outlined">{card('SOFTWARE', 'For simple plugins and big softs', 'Writing some plug-in systems for your projects')}</Card>
        </Grid>
      </Grid>
      </Box>
    );
  }
  