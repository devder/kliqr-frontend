import React, { useContext, useEffect } from 'react'
import { Toolbar, Avatar, Typography, Paper, Grid, List, ListItem, ListItemAvatar, ListItemText, Zoom, Grow, Slide } from '@material-ui/core'
import useStyles from './styles'
import { AppContext } from '../../context/AppContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Skeleton } from '@material-ui/lab'
import moment from 'moment'

const Details = () => {
    const classes = useStyles()

    const { activeUser, users, setActiveUser } = useContext(AppContext)

    useEffect(() => {
        if (users.length > 0) {
            setActiveUser(users[0].id)
        }
        // eslint-disable-next-line
    }, [users])

    const formatDate = date => {
        let formattedDate = date.replace(/-|\s/g, "")

        return moment(formattedDate.substr(0, 8), "YYYYMMDD").fromNow();
    }

    if (activeUser.id === undefined) return <div className={classes.root}>
        <Toolbar />
        <LinearProgress color="secondary" />

    </div>

    return (
        <Slide direction="right" in={activeUser.id !== undefined} mountOnEnter unmountOnExit>
            <div className={classes.root}>
                <Toolbar />
                <div className={classes.container}>
                    <div className={classes.header}>
                        {
                            activeUser.avatar ?
                                <Avatar
                                    className={classes.avatar} alt='image'
                                    src={activeUser.avatar}
                                /> :
                                <Skeleton animation="wave" variant="circle" width={100} height={100} />

                        }
                        <Typography className={classes.name}>
                            {
                                activeUser.id ? `${activeUser.first_name} ${activeUser.last_name}` :
                                    <Skeleton animation="wave" width={200} height={40} />
                            }
                        </Typography>

                        <Typography className={classes.sub}>
                            {
                                activeUser.created_at ? `${activeUser.totalTransactions} Transactions • Joined ${formatDate(activeUser.created_at)}` :
                                    <Skeleton animation="wave" width={300} height={10} />
                            }

                        </Typography>
                    </div>

                    <div className={classes.transactions}>
                        <Zoom in={activeUser.id !== undefined} style={{ transitionDelay: activeUser.id !== undefined ? '500ms' : '0ms' }}>
                            <Paper className={classes.paper} >
                                <Typography className={classes.paperHead}>TOTAL SPENT</Typography>
                                <Typography className={classes.paperSub}>{`₦${activeUser.totalDebit.toLocaleString()}`}</Typography>
                            </Paper>
                        </Zoom>

                        <Grow
                            in={activeUser.id !== undefined}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(activeUser.id !== undefined ? { timeout: 1000 } : {})}
                        >
                            <Paper className={classes.paper} >
                                <Typography className={classes.paperHead}>TOTAL INCOME</Typography>
                                <Typography className={classes.paperSub}>{`₦${activeUser.totalCredit.toLocaleString()}`}</Typography>
                            </Paper>
                        </Grow>

                        <Zoom in={activeUser.id !== undefined} style={{ transitionDelay: activeUser.id !== undefined ? '500ms' : '0ms' }}>
                            <Paper className={classes.paper} >
                                <Typography className={classes.paperHead}>TRANSACTIONS</Typography>
                                <Typography className={classes.paperSub}>{activeUser.totalTransactions}</Typography>
                            </Paper>
                        </Zoom>


                    </div>

                    <div className={classes.footer}>
                        <div style={{ width: 400 }}>
                            <Typography className={classes.recurringExpensesText} gutterBottom>RECURRING EXPENSES</Typography>
                            <Grid container spacing={2}>
                                {[1, 2, 3, 4,].map(() => <Grid key={Math.random()} item xs={3} >
                                    <div className={classes.icon}></div>
                                </Grid>)}
                            </Grid>
                        </div>


                        <div style={{ width: 400 }}>
                            <Typography className={classes.recurringExpensesText} style={{ paddingLeft: '2rem' }}>
                                {`USERS LIKE  "${activeUser.first_name} ${activeUser.last_name}"`}
                            </Typography>

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
        </Slide>
    )
}

export default Details

