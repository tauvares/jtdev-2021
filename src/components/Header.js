import React from 'react';
import {
  func, string, arrayOf, shape,
} from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ToggleThemeMode from './utils/ToggleThemeMode';
import ToggleLanguage from './utils/ToggleLanguage';
import HideOnScroll from './utils/HideOnScroll';
import ScrollTo from './utils/ScrollTo';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

const Header = ({
  theme, toggleTheme, loadPickedLanguage, navbarItems,
}) => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navbarItems.map((item) => (
        <ScrollTo section={item.section} key={item.title}>
          <MenuItem
            style={{ justifyContent: 'center' }}
            key={item.title}
          >
            {item.title}
          </MenuItem>
        </ScrollTo>
      ))}
      <MenuItem>
        <ToggleLanguage loadPickedLanguage={loadPickedLanguage} />
      </MenuItem>
      <MenuItem style={{ justifyContent: 'center' }}>
        <ToggleThemeMode theme={theme} toggleTheme={toggleTheme} />
      </MenuItem>
    </Menu>
  );

  return (
    <header id="navbar" style={{ display: 'block' }}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <div>
              <a href="https://github.com/tauvares" target="_blank" rel="noreferrer" className="github-corner" aria-label="View source on GitHub">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 250 250"
                  style={{
                    fill: '#151513',
                    color: '#fff',
                    position: 'absolute',
                    top: 0,
                    border: 0,
                    left: 0,
                    transform: 'scale(-1, 1)',
                    zIndex: 9999,
                  }}
                  aria-hidden="true"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                  <path
                    // eslint-disable-next-line
                    d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                    fill="currentColor"
                    style={{ transformOrigin: '130px 106px' }}
                    className="octo-arm"
                  />
                  <path
                    // eslint-disable-next-line
                    d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                    fill="currentColor"
                    className="octo-body"
                  />
                </svg>
              </a>
            </div>
            <Grid container className={classes.sectionDesktop} alignItems="center">
              <Grid item xs={8}>
                <Tabs style={{ marginLeft: '40px' }}>
                  {navbarItems.map((item) => (
                    <ScrollTo section={item.section} key={item.title}>
                      <Tab label={item.title} key={item.title} style={{ minWidth: '75%' }} />
                    </ScrollTo>
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.grow} />
                <ToggleLanguage loadPickedLanguage={loadPickedLanguage} />
                <ToggleThemeMode theme={theme} toggleTheme={toggleTheme} />
              </Grid>
            </Grid>
            <Grid container className={classes.sectionMobile} alignItems="center">
              <Grid item xs={11}>
                <h3 className="site-title">
                  João Tavares - jtdev.com.br
                </h3>
              </Grid>
              <Grid item xs={1}>
                <div className={classes.grow} />
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
    </header>
  );
};

Header.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
  loadPickedLanguage: func.isRequired,
  navbarItems: arrayOf(shape).isRequired,
};

export default Header;
