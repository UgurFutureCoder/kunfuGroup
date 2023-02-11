import { Box, Container } from "@mui/system"
import { Typography, Button } from "@mui/material"
import { hover } from "@testing-library/user-event/dist/hover"
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
const SectorOne = () => {
    return (
        <Container>
            <Typography sx={{ fontFamily: 'Inter',marginTop: 20,textAlign: 'center',color: `#333333`, fontSize: {xs: 40, sm: 40, md: 45, lg: 50, xl: 60 }}}
            variant="h1"

            >
           Ship sites with style.
            </Typography>
            <Box sx={{ fontFamily: 'Inter',textAlign: 'center', marginTop: 10, color: `#888888`, fontSize: {xs: 20, sm: 20, md: 25, lg: 30, xl: 35 }}} >
            <Typography variant="p" >Go from design to site with Framer, <br />
            the web builder for creative pros.</Typography>
            </Box>
            <CodeIcon sx={{
                position: 'absolute',
                top: 300,
                left: 200,
                fontSize: 50,
                transform: 'rotate(10deg)',
                color: `#FF0000`,
                filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
            }} />
            <LaptopMacIcon sx={{
                position: 'absolute',
                top: 300,
                right: 200,
                fontSize: 50,
                color:`#FF0000`,
                filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
                transform: 'rotate(340deg)',
            }} />
            <Button sx={{
                marginTop: 5,
                marginLeft: {xs: '35%', sm: '40%', md: '40%', lg: '45%', xl: '45%' },
                backgroundColor: `#222222`,
                ":hover": {backgroundColor: `#222222`}
            }}
         variant="contained" >Get Started</Button>
        </Container>
    )
}

export default SectorOne