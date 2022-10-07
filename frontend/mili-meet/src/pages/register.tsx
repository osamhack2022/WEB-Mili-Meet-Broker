import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styles from "./register.module.css";
import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from 'react'

//회원가입 화면
function Register() {

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
    console.log(Password);
}

const onIdHandler = (event) => {
    setId(event.currentTarget.value)
    console.log(Id);
}

const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
    console.log(Email);
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
            value={Email}
            onChange={onEmailHandler}
            required
          />
          <TextField
            name="userId"
            id="userId"
            label="ID"
            variant="outlined"
            margin="normal"
            value={Id}
            onChange={onIdHandler}
            required
          />
          <TextField
            id="userPassword"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={Password}
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
