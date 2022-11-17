import React from 'react'
import data from "./CourseData"
import CourseTitle from './CourseTitle'
import { Grid, Typography, Container , Card,CardMedia,CardContent,CardActions} from "@mui/material";

function CourseCard() {
    return (
        <>
            <Container maxWidth=""  sx={{ backgroundImage: 'url(./images/.svg)', height: "500px", position: "absolute", backgroundColor: "#131313", borderBottom: "2px solid teal", boxShadow: "6", flexgrow: 1 }}></Container>
            <Container maxWidth="xl" sx={{ marginTop: "10px", ml: "8%", width: "1300px", position: "relative" }}>
                <CourseTitle/>
                <Grid className="mt-1" container spacing={3} >
                  {
                  data.map((data, index)=> (
                    <Grid key={index} item lg={2} xs={3} md={4} sm={2}>
                        <Card sx={{ textAlign: "center", boxShadow: "3", backgroundColor: "#0f100f", color: "#bdbdbdu", border: "1px solid teal" }}>
                            <CardMedia component="img" image={data.img} alt="image" height="174px" />
                            <CardContent>
                                <Typography variant="h1" sx={{ fontSize: "16px", fontWeight: "560", color: "#bdbdbd" }} height="70px" >{data.title}</Typography>
                            </CardContent>
                            <CardActions sx={{ backgroundColor: "#717171", borderTop: "1px solid gray", color: "black" }}>
                                <Typography variant="h1" sx={{ fontSize: "17px", flexGrow: 1, fontWeight: "600" }}>
                                    Duration : {data.time} months
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                  ))
                  }
                   </Grid>
            </Container>
        </>
    )
}

export default CourseCard