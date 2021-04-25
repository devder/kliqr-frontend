import React from 'react'
import { Toolbar, Avatar, Typography, Paper, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import useStyles from './styles'


const Details = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Toolbar />
            <div className={classes.container}>
                <div className={classes.header}>
                    <Avatar className={classes.avatar} alt='image' src='https://randomuser.me/api/portraits/women/51.jpg' />
                    <Typography className={classes.name}>Samuel Ocran</Typography>
                    <Typography className={classes.sub}>300 Transactions • Joined 2 months ago</Typography>
                </div>
                <div className={classes.transactions}>
                    <Paper className={classes.paper} >
                        <Typography className={classes.paperHead}>TOTAL SPENT</Typography>
                        <Typography className={classes.paperSub}>₦590,00</Typography>
                    </Paper>
                    <Paper className={classes.paper} >
                        <Typography className={classes.paperHead}>TOTAL INCOME</Typography>
                        <Typography className={classes.paperSub}>₦590,00</Typography>
                    </Paper>
                    <Paper className={classes.paper} >
                        <Typography className={classes.paperHead}>TRANSACTIONS</Typography>
                        <Typography className={classes.paperSub}>300</Typography>

                    </Paper>
                </div>
                <div className={classes.footer}>
                    <div style={{ width: 400 }}>
                        <Typography className={classes.recurringExpensesText} gutterBottom>RECURRING EXPENSES</Typography>
                        <Grid container spacing={2}>
                            {[1, 2, 3, 4, 5, 6, 4, 4].map(() => <Grid key={Math.random()} item xs={3} >
                                <div className={classes.icon}></div>
                            </Grid>)}
                        </Grid>
                    </div>


                    <div style={{ width: 400 }}>
                        <Typography className={classes.recurringExpensesText} style={{ paddingLeft: '2rem' }}>USERS LIKE Samuel Ocran</Typography>

                        <List dense className={classes.list}>
                            {[1, 2, 3,].map((n) => <ListItem key={Math.random()}>
                                <ListItemAvatar>
                                    <Avatar alt='image' src='https://randomuser.me/api/portraits/men/33.jpg' />
                                </ListItemAvatar>
                                <ListItemText disableTypography>
                                    <Typography className={classes.userName} gutterBottom>Jude Agboola</Typography>
                                    <Typography className={classes.userTx}>300 Transactions • Joined 2 months ago</Typography>
                                </ListItemText>
                            </ListItem>)}
                        </List>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Details
