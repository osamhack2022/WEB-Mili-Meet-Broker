import { AppBar, Button, Container, CssBaseline, GlobalStyles, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

function Index() {
  const { data } = useSession()
  const [sessionID, setSessionID] = useState('');
  const router = useRouter();

  const onClickCreate = () => {
    const randomStr = Math.random().toString(36).slice(2);
    router.push(`/conference/${randomStr}`);
  };

  return (
    <div style={{ height: '100vh' }}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Mili-Meet
          </Typography>
          {(data) ? (
            <>
              <Typography color="text.secondary">
                안녕하세요, {data?.user?.name} 님.
              </Typography>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => signOut()}>
                로그아웃
              </Button>
            </>
          ) : (
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => signIn()}>
              로그인
            </Button>
          )}

        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ my: 4, height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
        >
          Mili-Meet
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          밀리미트는 웹 기반의 실시간 화상회의 서비스로 좀 더 가볍고(Light), 쉬운(Easy) 화상회의 서비스를 제공합니다.
        </Typography>
        <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <TextField label="회의 코드 입력" value={sessionID} onChange={(e: ChangeEvent<HTMLInputElement>) => setSessionID(e.target.value)} fullWidth />
          <IconButton size="large" onClick={() => router.push(`/conference/${sessionID}`)}>
            <ArrowForwardIcon />
          </IconButton>
        </Paper>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          OR
        </Typography>
        <Button variant="contained" onClick={onClickCreate}>새로운 회의 생성하기</Button>
      </Container>
    </div>
  );
}

export default Index;
