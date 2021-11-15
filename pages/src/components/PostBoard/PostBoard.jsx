import { useState, useEffect } from "react";
import PostCard from "../PostCard/PostCard.jsx";
import { Grid, CircularProgress, Typography } from "@mui/material";

const PostBoard = () => {
  const [postData, setPostData] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetch(
        "https://worker_api.jerryhsieh.workers.dev/post"
      );

      const data = await fetchedData.json();
      setPostData(data);
    };

    getData();
  }, []);
  const PostCards = () => {
    if (postData.length < 1 || !postData) {
      return (
        <Grid item textAlign="center">
          <Typography variant="h4" component="div">
            No post yet :(
          </Typography>
        </Grid>
      );
    }
    const cardArr = [];

    for (var i = 0; i < postData.length; i++) {
      cardArr.push(
        <Grid item key={i}>
          <PostCard data={postData[i]} />
        </Grid>
      );
    }
    return cardArr;
  };

  return (
    <Grid container direction="column" spacing={2} textAlign="left">
      {postData ? (
        <PostCards />
      ) : (
        <Grid item textAlign="center">
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default PostBoard;
