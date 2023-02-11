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
const card = (head, price,aboutOne, aboutTwo, aboutThree, aboutFour) => (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {head}
            </Typography>
            <Typography variant="h2" component="div">
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
                            <ListItemContent sx={{
                                fontFamily: 'Inter'
                            }}>{aboutOne}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton color="danger">
                            <DoneIcon sx={{
                                marginRight: 3
                            }} />
                            <ListItemContent sx={{
                                fontFamily: 'Inter'
                            }}>{aboutTwo}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton color="danger">
                            <DoneIcon sx={{
                                marginRight: 3
                            }} />
                            <ListItemContent sx={{
                                fontFamily: 'Inter'
                            }}>{aboutThree}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton color="danger">
                            <DoneIcon sx={{
                                marginRight: 3
                            }} />
                            <ListItemContent sx={{
                                fontFamily: 'Inter'
                            }}>{aboutFour}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </CardContent>
        <CardActions>
            <Button variant='contained' sx={{
                backgroundColor: `#000000`,
                ":hover": {backgroundColor: `#363636`}
            }} size="meduim">Get Started</Button>
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
                    minWidth: 310,
                    minHeight: 435
                }} item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('Easy', '$0', 'simple web-apps layout', 'simple telegram-bot', 'mobile apps layout', 'plugins')}</Card>
                </Grid>
                <Grid sx={{
                    minWidth: 310,
                    minHeight: 435
                }}
                    item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('Normal', '$25', 'dimanyc web application', 'telegram-bots with features', 'standart mobile apps', 'softwares')}</Card>
                </Grid>
                <Grid sx={{
                    minWidth: 310,
                    minHeight: 435
                }}
                    item xs>
                    <Card sx={{
                        borderRadius: 5
                    }} variant="outlined">{card('Professional', '$60', 'difficult web apps', 'telegram-bots with difficult features','difficult mobile apps','systems features' )}</Card>
                </Grid>
            </Grid>
        </Box>
    );
}