import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { SetStateAction, useState } from 'react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

//temporary Name에는 추후 이름 입력할 예정
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [passwordFeedback, setPasswordFeedback] = useState("");

  const onCurrentPasswordHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setcurrentPassword(event.currentTarget.value)
  }

  const onnewPasswordHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setnewPassword(event.currentTarget.value)
  }

  const onPasswordFeedbackHandler = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setPasswordFeedback(event.currentTarget.value)
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' , borderRadius: '16px', justifyContent: 'flex-end'}}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, borderRadius: '5px'}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32}}></Avatar>
            <Typography sx={{ pl: 1, minWidth: 100 }}>temporary Name</Typography> 
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <Typography sx={{ ml: 1 }} >Change Password</Typography>           
          <TextField
                sx={{ display: 'block', pl: 1, pr: 1 }}
                id="currentPassword"
                label="현재 비밀번호 입력"
                variant="outlined"
                type="password"
                margin="normal"
                value={currentPassword}
                onChange={onCurrentPasswordHandler}
                required
              />
          <TextField
                sx={{ display: 'block', pl: 1, pr: 1 }}          
                id="newPassword"
                label="새 비밀번호 입력"
                variant="outlined"
                type="password"
                margin="normal"
                value={newPassword}
                onChange={onnewPasswordHandler}
                required
              />
          <TextField
                sx={{ display: 'block', pl: 1, pr: 1 }}          
                id="passwordFeedback"
                label="새 비밀번호 재입력"
                variant="outlined"
                type="password"
                margin="normal"
                value={passwordFeedback}
                onChange={onPasswordFeedbackHandler}
                required
              />

        <MenuItem>
          <ListItemIcon>
            <ChangeCircleIcon fontSize="small" />
          </ListItemIcon>
          Submit
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
