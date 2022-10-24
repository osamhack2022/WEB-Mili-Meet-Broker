import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styles from "./register.module.css";
import { Box } from "@mui/material";
import Link from "next/link";
import { SetStateAction, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import React from "react";

//회원가입 화면
function Register() {
  //로그인 페이지 구현 코드 작성을 위해 임시로 firebase 사용
    async function saveUserData() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
    };
  
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPasswordHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setPassword(event.currentTarget.value)
}

const onIdHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setuserId(event.currentTarget.value)
}

const onEmailHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setEmail(event.currentTarget.value)
}
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
        <div className={styles.input}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"            
            value={email}
            onChange={onEmailHandler}
            required
          />
          <TextField
            name="userId"
            id="userId"
            label="ID"
            variant="outlined"
            margin="normal"
            value={userId}
            onChange={onIdHandler}
            required
          />
          <TextField
            id="userPassword"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={onPasswordHandler}
            required
          />
        </div>
        <div className={styles.button}>
          <Link href="/loginPage">
            <Button
              variant="contained"
              className="loginPageButton"
              size="large"
              sx={{ mt: 3, pl: 34, pr: 34, pt: 2, pb: 2 }}
              onClick={() => saveUserData()}
            >
              로그인
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
}

export default Register;