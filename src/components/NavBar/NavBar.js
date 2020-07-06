import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/exambazzar">Exambazaar</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;