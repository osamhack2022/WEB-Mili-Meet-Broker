import { Button, TextField } from "@mui/material";
import styles from "./loginPage.module.css";
import { Box } from "@mui/material";
import Link from "next/link";

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
        <div className={styles.input}>
          <TextField
            id="userId"
            label="ID"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="userPassword"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
          />
        </div>
        <div className={styles.button}>
        <Link href="/roomCode">
            <Button
              variant="contained"
              className="loginPageButton"
              size="large"
              sx={{ mt: 3, pl: 9, pr: 9, pt: 2, pb: 2 }}
              type="submit"
            >
              로그인
            </Button>
          </Link>
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
      </Box>
    </>
  );
}

export default Login;
