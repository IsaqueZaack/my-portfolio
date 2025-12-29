import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid'
import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.jpeg"
import { Button, Container, Typography } from '@mui/material'

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={8}>
              <Typography color="primary" variant="h1" textAlign="center">Isaque Paixão</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm fullstack</Typography>
              <Button>
                <DownloadIcon />
                Download CV
              </Button>
              <Button>
                <MailOutlineIcon />
                Contact me
              </Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
