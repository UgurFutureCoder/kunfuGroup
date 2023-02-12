import { Grid, List, ListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Divider from '@mui/material/Divider';
import { ListItemContent } from "@mui/joy";
const SectorSix = () => {
    return (
        <Box sx={{
            backgroundColor: `#111111`,
            marginTop: 10,
            height: { xs: 1000, sm: 800, md: 400, lg: 400, xl: 400 },
            fontFamily: 'Inter'
        }}>
            <List sx={{
                display: 'flex'
            }}>
            <List sx={{
            color: `#FFFFFF`,
            marginTop:10,
            marginLeft: 30
            }}>
                <ListItem>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }} >
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
            </List>
            <List sx={{
            color: `#FFFFFF`,
            marginTop:10,
            marginLeft: 40
            }}>
                <ListItem>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
            </List>
            <List sx={{
            color: `#FFFFFF`,
            marginTop:10,
            marginLeft: 40
            }}>
                <ListItem>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
                <ListItem sx={{
                    color: `#999999`
                }}>
                    Hello
                </ListItem>
            </List>
            </List>
            <Divider sx={{
                backgroundColor: `#FFFFFF`,
                width: { xs: 1000, sm: 400, md: 800, lg: 1100, xl: 1100 },
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 4
            }} />

            <Typography sx={{
                color: `#FFFFFF`,
                marginLeft: 15
            }} variant="p">© 2023 kunfuGroup, Inc.</Typography>
        </Box>
    )
}
export default SectorSix