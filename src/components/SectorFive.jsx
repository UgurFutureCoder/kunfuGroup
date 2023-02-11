import { Button, Grid, ImageList, Typography } from "@mui/material"
import { List, ListItem, ListItemButton } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import logo from './UABB.png'
import { Box } from "@mui/system";
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './index.css'
const SectorFive = () => {
    return (
        <div>
            <Grid container>
                <Grid>
                    <List sx={{
                        marginLeft: { xs: 5, sm: 20, md: 18, lg: 25, xl: 30 },
                        marginTop: 10
                    }}>
                        <ListItem>
                            <Typography variant="h2">Fast</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{
                                fontFamily: 'Inter',
                            }} variant="p">You’ve never made a website this fast before.</Typography>

                        </ListItem>
                        <ListItem>
                            <Button variant="contained" sx={{
                                backgroundColor: `#000000`,
                                ":hover": { backgroundColor: `#000000`, textDecoration: 'underline', }
                            }}>Github <LinkIcon sx={{
                                fontSize: 17,
                                marginLeft: 1,
                            }} /></Button>
                        </ListItem>
                    </List>
                </Grid>
                <Grid sx={{
                    marginLeft: { xs: 5, sm: 20, md: 8, lg: 25, xl: 35 },
                    marginTop: { xs: 5, lg: 5 }
                }}>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src={logo}
                            sx={{ width: 320, height: 320 }}
                        />
                    </Stack>
                </Grid>
            </Grid>
         {/* stop */}
            <Grid container>
                <Grid sx={{
                        marginLeft: { xs: 5, sm: 20, md: 18, lg: 25, xl: 30 },
                        marginTop: 10
                    }}>
                <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src={logo}
                            sx={{ width: 320, height: 320 }}
                        />
                    </Stack>
                </Grid>
                <Grid>
                    
                    <List sx={{
                    marginLeft: { xs: 5, sm: 20, md: 8, lg: 25, xl: 35 },
                    marginTop: { xs: 5, lg: 5 }
                }}>
                        <ListItem>
                            <Typography variant="h2">Fast</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{
                                fontFamily: 'Inter',
                            }} variant="p">You’ve never made a website this fast before.</Typography>

                        </ListItem>
                        <ListItem>
                            <Button variant="contained" sx={{
                                backgroundColor: `#000000`,
                                ":hover": { backgroundColor: `#000000`, textDecoration: 'underline', }
                            }}>Github <LinkIcon sx={{
                                fontSize: 17,
                                marginLeft: 1,
                            }} /></Button>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default SectorFive