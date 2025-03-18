import { Button, Container, Grid2 , styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/eminence2.png"
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero =  styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImage =  styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))
    
    
    return (
      <>
    <StyledHero>
        <Container maxWidth="lg">
            <Grid2 container spacing={2}>
                <Grid2 size={{xs: 12, md: 4}}> 
                    <StyledImage src={Avatar} /> 
                </Grid2>
                <Grid2 size={{xs: 12, md: 8}}>    
                    <Typography color="primary" variant="h1" textAlign = "center">Leonardo Gabriel</Typography>
                    <Typography color="primary" variant="h2" textAlign = "center ">Developer Full Stack</Typography>
                    <Grid2 size = {12} container display="flex" justifyContent="center">
                         <Button>
                             Contact me
                            <EmailIcon/>
                        </Button>
                    </Grid2>   

                </Grid2>
            </Grid2>
        </Container>


        </StyledHero>
      </>
    )
  }
  
  export default Hero
  