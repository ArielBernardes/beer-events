import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #000000 30%, #2F7336 95%)',
    
  },
  cont: {
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    fontFamily: 'Style Script', 
    fontSize:'2rem',    
  },
  btn: {
      marginRight:'5px',
      background: 'black',
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#2F7336',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#2F7336',
        borderColor: '#2F7336',
      },
      
  }
}));

const Header = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMobile)

    const history = useHistory();
  
    const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleWedding = () => {
    history.push('/wedding')
  }

  const handleGraduation = () => {
    history.push('/graduation')
  }

  const handleConfraternization = () => {
    history.push('/confraternization')
  }

  return (
    <div >
      <AppBar className={classes.root} position="static">
        <Toolbar className = {classes.cont}>
            <Link to = '/' className={classes.title}>
                Beer Shop
            </Link>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {isMobile ? 
            <div>
              <IconButton
                aria-label="events list"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={()=> setAnchorEl(null)}
              >
                <MenuItem onClick={handleWedding}>Wedding</MenuItem>
                <MenuItem onClick={handleGraduation}>Confraternization</MenuItem>
                <MenuItem onClick={handleConfraternization}>Graduation</MenuItem>
              </Menu>
            </div>
            :
            <div>
                <Button onClick={handleWedding} className={classes.btn} >Wedding</Button>
                <Button onClick={handleGraduation} className={classes.btn} >Graduation</Button>
                <Button onClick={handleConfraternization} className={classes.btn} >Confraternization</Button>
            </div>
            }
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;