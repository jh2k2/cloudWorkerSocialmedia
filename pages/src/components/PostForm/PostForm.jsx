import { Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const PostForm = () => {
  const [userInput, setUserInput] = useState({
    username: undefined,
    title: undefined,
    content: undefined,
  });
  const handleSubmit = async () => {
    if (!userInput.username || !userInput.title || !userInput.content) {
      return alert("You need to fill all fields");
    }
    await fetch("https://worker_api.jerryhsieh.workers.dev/post", {
      method: "POST",
      body: JSON.stringify(userInput),
    });
  };
  return (
    <form noValidate autoComplete="false" onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={3} padding={2}>
        <Grid item>
          <Typography variant="h4" component="div">
            Make a post!
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            onChange={(e) =>
              setUserInput({ ...userInput, username: e.target.value })
            }
            fullWidth
            label="Username"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Title"
            onChange={(e) =>
              setUserInput({ ...userInput, title: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            multiline
            fullWidth
            rows={4}
            label="Content"
            onChange={(e) =>
              setUserInput({ ...userInput, content: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item spacing={3} container justifyContent="center">
          <Grid item>
            <Button variant="contained" color="success" type="submit">
              Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
