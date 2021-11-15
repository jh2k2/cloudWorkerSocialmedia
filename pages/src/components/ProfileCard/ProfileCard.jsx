import { Grid, Avatar, Typography } from "@mui/material";

const ProfileCard = () => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item display="flex">
        <Avatar sx={{ width: 180, height: 180 }}>A</Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="div">
          Anonymous User
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
