import React from 'react';
import { signIn } from "next-auth/react"
import { Button, Box } from "@mui/material";
import styles from "./register.module.css";

// 로그인 화면
function Login() {
  return (
    
    <>
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className={styles.title}>Mili-Meet</h1>
        <div className={styles.button}>
            <Button
              variant="contained"
              className="loginPageButton"
              size="large"
              sx={{ mt: 3, pl: 34, pr: 34, pt: 2, pb: 2 }}
              onClick={() => signIn()}
            >
              로그인
            </Button>
        </div>
      </Box>
    </>
  );
}
export default Login;
