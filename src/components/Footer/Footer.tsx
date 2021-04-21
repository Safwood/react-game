import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import style from './styles.module.css'
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer: React.FC = () => {
  return (
    <footer>
    <AppBar className={style.footer} position="static">
      <Container maxWidth="lg">
        <Toolbar >
          <div className={style.footerGithubs}>
            <IconButton href="https://github.com/Safwood" target="_blank">
              <GitHubIcon className={style.footerGithubIcon} style={{'color': "#000"}}/>
            </IconButton>
          </div>
          <Typography variant="h6" className={style.title}>
            RSLang
          </Typography>
          <Typography variant="body2" className={style.footerYear}>
            2021г.
          </Typography>
          
        </Toolbar>
        </Container>
    </AppBar>
  </footer>
  )
}


export default Footer;