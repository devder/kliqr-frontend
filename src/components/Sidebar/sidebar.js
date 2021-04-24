import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Typography, Container, Toolbar }
    from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles'

const Sidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Toolbar />
            <Container>
                <Typography className={classes.usersText}>
                    USERS
            </Typography>
            </Container>
            <List dense className={classes.list}>
                {[1, 2, 3].map((n) => <div style={{ marginBottp: '15px 0' }}> <ListItem>
                    <ListItemAvatar>
                        <Avatar alt='image' src='https://randomuser.me/api/portraits/men/33.jpg' className={classes.avatar} />
                    </ListItemAvatar>
                    <ListItemText disableTypography>
                        <Typography className={classes.userName} gutterBottom>Jude Agboola</Typography>
                        <Typography className={classes.userTx}>300 Transactions • Joined 2 months ago</Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRightIcon />
                    </ListItemSecondaryAction>
                </ListItem></div>)}
            </List>

        </div>
    )
}

export default Sidebar
