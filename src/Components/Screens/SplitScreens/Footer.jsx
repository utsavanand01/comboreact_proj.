import { Container, List, ListItem, Typography, Grid } from "@mui/material";

export default function Footer (){
    return(
        <>
        <Container maxWidth="" sx={{ backgroundImage:'url(./images/bgimg.png)',backgroundSize:"cover",backgroundRepeat: "no-repeat", color:"#d7d7d7",  height:"320px"}} >
            <Grid container >
                <Grid item lg={4}>
                    <Typography variant="h1" sx={{fontWeight:"lighter", marginBlockStart:"10px", fontSize:"30px", fontFamily:"sans-serif", padding:"30px", color:"white"}}>
                        Code with Sadiq
                    </Typography>

                </Grid>
                <Grid item lg={2} >
                    <List>
                        <ListItem disablePadding sx={{marginTop:"25px", color:"white",fontSize:"23px"}}>Quick Links</ListItem>
                        <ListItem disablePadding sx={{marginTop:"15px", color:"white",}}>Home</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>About</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Projects</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Work Shops</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Hire Us</ListItem>
                    </List>
                </Grid>

                <Grid item lg={2} >
                    <List>
                        <ListItem disablePadding sx={{marginTop:"25px", color:"white",fontSize:"23px"}}>About Class</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>About Instructer</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>MileStones</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Vision</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Community</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>Our Team</ListItem>

                    </List>
                </Grid>


                <Grid item lg={3} >
                    <List>
                        <ListItem disablePadding sx={{marginTop:"25px", color:"white",fontSize:"23px"}}>Location</ListItem>
                        <ListItem disablePadding sx={{marginTop:"15px", color:"white",}}>Ramavtar Market, Near Dog Hospital,
Thana Chowk, Gandhinagar, Madhubani, Purnea - 854301</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>+91 95 4680 5580</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>cwspurnea@gmail.com</ListItem>
                        <ListItem disablePadding sx={{marginTop:"10px", color:"white",}}>www.codewithsadiq.com</ListItem>

                    </List>
                </Grid>



            </Grid>
           <div className="flex items-center justify-center mt-1">
           <div className="card card-footer rounded text-center justify-center items-center w-full text-white flex mt-10 ">
            <small className="text-md " style={{letterSpacing:"0.4em"}} > © www.codewithsadiq.com</small>
            <small className='font-mono  text-xs'> All Rights Reserved</small>
          </div>
           </div>

        </Container>
        </>
    )
}