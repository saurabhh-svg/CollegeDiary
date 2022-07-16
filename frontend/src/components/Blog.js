import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, IconButton } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const navigate = useNavigate();
  //console.log(id);
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  console.log(title, isUser);
  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={handleEdit}>
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b>
            {":"} {description}
          </Typography>
        </CardContent>
      </Card>{" "}
    </div>
  );
};

export default Blog;
