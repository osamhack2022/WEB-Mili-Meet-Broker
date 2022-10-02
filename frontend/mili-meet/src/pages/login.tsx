import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { styles } from './login.module.css';

function index() {
    return (
        <>
            <h1>Mili-Meet</h1>
            <div className= {styles.input}>
              <TextField id="Login" label="Username" variant="outlined"></TextField>
              <TextField id="Login" label="Password" variant="outlined"></TextField>
            </div>
            <div className={styles.button}>
              <Button variant="contained">로그인</Button>
              <Button variant="contained">회원가입</Button>
            </div>
        </>
      )
    }
  
  export default index;