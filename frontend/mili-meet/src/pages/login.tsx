import styles from "./login.module.css";
import { Box } from "@mui/material";

// 로그인 화면
function login() {
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
            id="userID"
            label="ID"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
          />
        </div>
        <div className={styles.button}>
          <Button
            variant="contained"
            className="loginPageButton"
            size="large"
            sx={{ mt: 3, pl: 9, pr: 9, pt: 2, pb: 2 }}
            type="submit"
          >
            로그인
          </Button>
          <Button
            href="./register"
            variant="contained"
            className="registerPageButton"
            size="large"
            sx={{ mt: 3, pl: 9, pr: 9, pt: 2, pb: 2 }}
            type="submit"
          >
            회원가입
          </Button>
        </div>
      </Box>
    </>
  );
}

export default login;
