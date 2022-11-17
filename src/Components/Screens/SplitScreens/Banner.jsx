import { Container, Typography, Grid } from "@mui/material"
export default function Banner () {
    return (
            <Container maxWidth="" sx={{ backgroundImage:'url(./images/bgimg.png)',backgroundSize:"cover",backgroundRepeat: "no-repeat", color:"#d7d7d7",  height:"540px"}}>
                <Grid container >
                    <Grid item lg={12} md={12} sm={12} xl={12} sx={{paddingInline:"160px", pt:"80px", }} >
                          <Typography sx={{fontSize:"81px", fontWeight:"300", letterSpacing:"2px", fontFamily:"inherit"}}>
                               Skill Hai! To Future Hai!
                          </Typography>

                    </Grid>
                     <Grid item lg={8} md={10} sm={10} xl={10} sx={{paddingInline:"160px", pt:"15px"}}>
                          <Typography variant="body" sx={{fontSize:"18px", letterSpacing:"1px"}}>
                             "CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects,               programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from               expert mentors with team training & coaching experiences in <strong>Project based training.</strong>"
                          </Typography>

                    </Grid>
                </Grid>
             
             
              
            </Container>
    )
}