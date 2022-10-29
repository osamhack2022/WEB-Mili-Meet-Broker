import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styles from "./register.module.css";
import { Box } from "@mui/material";
import Link from "next/link";
import ProfileCard from "../components/ProfileCard";


//회원가입 화면
function RoomCode() {
  return (
    <>
      <ProfileCard></ProfileCard>
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
            id="roomCode"
            label="Write Room Code"
            variant="outlined"
            margin="normal"
            fullWidth
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
              입장
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
}

export default RoomCode;