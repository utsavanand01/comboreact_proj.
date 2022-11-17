import { Grid, Typography, Container } from "@mui/material";

export default function CourseTitle () {
    return (
        <Container sx={{ml:"-2%"}}>
            <Grid container >
                <Grid item >
                   <Typography variant="h5" className="py-1 mt-3" component="h5" sx={{ borderLeft:"4px solid gray" ,fontFamily:"inherit", paddingInline:"6px ", color:"#d7d7d7"}}>
                        <h5>Our Courses</h5>
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    )
}