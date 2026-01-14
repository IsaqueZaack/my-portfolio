import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/GridLegacy'
import { styled } from '@mui/material/styles';
import Avatar from "../../../../assets/images/avatar.jpeg"
import { Box, Container, Typography } from '@mui/material'
import StyledButton from '../../../../StyledButton/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up('xs')]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",

    },
    [theme.breakpoints.up('md')]: {
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      height: "100vh"
    }
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    position: "relative",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-250} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>

            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Isaque Paixão</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm fullstack</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Download")}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Contact")}>
                    <MailOutlineIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
