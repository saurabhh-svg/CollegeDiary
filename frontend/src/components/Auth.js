import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignUp, setisSignUp] = useState();
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justiftContent={"center"}
          boxshadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {!isSignUp ? "Login" : "Signup"}
          </Typography>
          {isSignUp && (
            <TextField value={inputs.name} placeholder="Name" margin="normal" />
          )}
          <TextField
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />

          <Button
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setisSignUp(!isSignUp)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignUp ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
