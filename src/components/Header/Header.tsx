import React from 'react';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import style from './styles.module.css'

const Header: React.FC = () => {
  return (
      <AppBar color="primary" position="static" className={style.Header} >
        <Container maxWidth="lg">
          <Toolbar color="primary.main">
            {/* <SimpleMenu /> */}
            <Typography variant="h2" className={style.HeaderTitle}>
              Tic Tac Toe
            </Typography>
            <Button color='inherit' id={"login"}>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Header;





    
