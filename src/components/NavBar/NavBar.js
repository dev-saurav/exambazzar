import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'

const NavBar = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Exambazaar
          </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;