import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}, backgroundColor:"blue"}}>
        
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'block'}, 
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}>

                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Facundo Quiroga
                    </Typography>
                    
                </Toolbar> 
                <Divider />

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map(text=>(
                            <ListItem key= {text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary= {text} />
                                        <ListItemText secondary= "loremsadasdsad dsdsafds dsfsdfsd" />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

        </Drawer>


    </Box>
  )
}
