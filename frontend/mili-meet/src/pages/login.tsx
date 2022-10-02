import { Button } from '@mui/material';
import { TextField } from '@mui/material';
function index() {
    return (
        <>
            <h1>Mili-Meet</h1> 
            <TextField id="Login" label="Username" variant="outlined"></TextField>
            <TextField id="Login" label="Password" variant="outlined"></TextField>
            <Button variant="contained">로그인</Button>
            <Button variant="contained">회원가입</Button>
        </>
      )
    }
  
  export default index;