import { Button, TextField } from "@mui/material";
import styles from "./loginPage.module.css";
import { Box } from "@mui/material";
import Link from "next/link";
import { SetStateAction, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import keycloak from '../../../../keycloak/keycloak';

// 로그인 화면
function Login() {

//로그인 페이지 구현 코드 작성을 위해 임시로 firebase 사용
 async function getUser(userData: any) {
  const docRef = doc(userData);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

  const [userId, setuserId] = useState("");
  const [Password, setPassword] = useState("");

  const onPasswordHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setPassword(event.currentTarget.value)
  }

  const onIdHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
      setuserId(event.currentTarget.value)
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
        <form action="/backend/index.js" method='POST'>
          <div className={styles.input}>
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
              value={Password}
              onChange={onPasswordHandler}
              required
            />
          </div>
          <div className={styles.button}>
              <Button
                variant="contained"
                className="loginPageButton"
                size="large"
                sx={{ mt: 3, pl: 9, pr: 9, pt: 2, pb: 2 }}
                onClick={() => keycloak.login()}
              >
                로그인
              </Button>
            <Link href="/register">
              <Button
                variant="contained"
                className="registerPageButton"
                size="large"
                sx={{ mt: 3, pl: 9, pr: 9, pt: 2, pb: 2 }}
                type="submit"
              >
                회원가입
              </Button>
            </Link>
          </div>
        </form>
      </Box>
    </>
  );
}
export default Login;
