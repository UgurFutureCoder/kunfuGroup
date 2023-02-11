import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { List, ListItem, ListItemButton } from '@mui/material';
import ListItemContent from '@mui/joy/ListItemContent';
const card = (head, price, adj, about) => (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {head}
            </Typography>
            <Typography variant="h5" component="div">
                {price}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            </Typography>
            <Box variant="div">
                <List>
                    <ListItem>
                        <ListItemButton color="danger">
                            <DoneIcon sx={{
                                marginRight: 3
                            }} />
                            <ListItemContent>{about}</ListItemContent>

                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function SectorThree() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{
                marginTop: 2
            }} container spacing={3}>
                <Grid sx={{
                    minWidth: 200,
                    minHeight: 300
                }} item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('dfvf', 'fdfv', 'fdfvdf', 'sfvsvvfwv')}</Card>
                </Grid>
                <Grid sx={{
                    minWidth: 200,
                    minHeight: 300
                }}
                    item xs>
                    <Card sx={{
                        borderRadius: 5,
                        height: 170,
                    }} variant="outlined">{card('MOBILE', 'For Mobile apps', 'Mobile apps for our buisnes')}</Card>
                </Grid>
                <Grid sx={{
                    minWidth: 200,
                    minHeight: 300
                }}
                    item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('TELEGRAM', 'For Telegram Oauth and Bots', 'Telegram Bots (helper) for your shop or individual use')}</Card>
                </Grid>
                <Grid sx={{
                    minWidth: 200,
                    minHeight: 300
                }}
                    item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('SOFTWARE', 'For simple plugins and big softs', 'Writing some plug-in systems for your projects')}</Card>
                </Grid>
            </Grid>
        </Box>
    );
}