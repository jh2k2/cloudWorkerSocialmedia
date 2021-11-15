import { Card, CardContent, CardHeader } from "@mui/material";

const PostCard = (props) => {
  const data = props.data;
  return (
    <Card variant="outlined">
      <CardHeader
        title={data.title}
        subheader={`Post by ${data.username}`}
        sx={{
          mb: 0,
          pb: 0,
        }}
      ></CardHeader>
      <CardContent>{data.content}</CardContent>
    </Card>
  );
};

export default PostCard;
