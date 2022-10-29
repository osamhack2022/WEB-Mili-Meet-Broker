import { AppBar, Button, Container, CssBaseline, GlobalStyles, Toolbar, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

function Index() {
  const { data } = useSession()

  console.log(data);

  return (
    <>
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
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Mili-Meet
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          밀리미트는 웹 기반의 실시간 화상회의 서비스로 좀 더 가볍고(Light), 쉬운(Easy) 화상회의 서비스를 제공합니다.
        </Typography>
      </Container>
    </>
  );
}

export default Index;
