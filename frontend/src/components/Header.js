import React from "react";
import { useState } from "react";
import { Link  } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,99,255,1) 48%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blogs App</Typography>

        <Box display="flex" marginLeft="auto" marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          </Tabs>
        </Box>

        <Box display="flex" marginLeft="auto">
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
