import { Grid, Typography, Container } from "@mui/material";

export default function StudentsTitle () {
    return (
        <Container sx={{ml:"-2%"}} className="mt-4 mb-3 py-2">
            <Grid container >
                <Grid item >
                   <Typography variant="h5" component="h5" sx={{ borderLeft:"4px solid gray" ,fontFamily:"inherit", paddingInline:"6px ", color:"#d7d7d7"}}>
                        <h5>Students Achievements</h5>
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    ) 
}