import * as React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "../components/Navbar/Navbar.jsx";
import PostBoard from "../components/PostBoard/PostBoard.jsx";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";
import PostForm from "../components/PostForm/PostForm.jsx";
import { Box, Grid, Paper, Toolbar } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const App = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Toolbar></Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} direction="column" spacing={4} container>
            <Grid item>
              <Item>
                <ProfileCard></ProfileCard>
              </Item>
            </Grid>
            <Grid item>
              <Item>
                <PostForm></PostForm>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Item>
              <PostBoard></PostBoard>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
