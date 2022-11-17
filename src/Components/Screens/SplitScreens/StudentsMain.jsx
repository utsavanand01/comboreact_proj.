import StudentsTitle from "./StudentsTitle";
import {Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

import data from './StuData'
export default function StudentsMain() {
    return (
        <>
            <Container maxWidth="" sx={{ backgroundColor: "#131313" }}>

                <Container maxWidth="xl" sx={{ marginTop: "10px", ml: "7%", width: "1330px", marginTop: "70px", pb: "70px" }} className="pt-1 ">
                    <StudentsTitle />
                    <Grid container spacing={3}>
                    {
                        data.map((data, index)=>(
                            <Grid key={index} item lg={2} xs={12} md={4} sm={6}>
                            <Card boxShadow={4} sx={{ textAlign: "center", backgroundColor: "#383838", border: "1px solid teal", height: "340px" }}>
                            <CardMedia component="img" image={data.img} alt="image"  style={{height:200}} />
                                <CardContent>
                                    <Typography variant="h1"  sx={{ fontSize: "20px", fontWeight: "550", fontFamily: "inherit", color: "#bdbdbd" }} >{data.title}</Typography>
                                    <Typography variant="h4" sx={{ fontSize: "18px", color: "gray", mt: "20px" }} ><small>{data.expert}</small></Typography>
                                    <Typography variant="h6" sx={{ fontSize: "13px", color: "gray", mb: "10px" }}><small>{data.works}</small></Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))
                    }
                        
                    </Grid>
                </Container>
            </Container>
        </>
    )

}