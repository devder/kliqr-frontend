import React, { useContext } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Typography, Container, IconButton, Toolbar }
    from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles';
import moment from 'moment'
import { AppContext } from '../../context/AppContext';


function getNumberOfUserTransactions(id, arr) {
    let filteredArr = arr.filter(tx => tx.user_id === id);
    return filteredArr.length
}

const Sidebar = () => {
    const classes = useStyles()

    const { users, transactions, setActiveUser, activeUser } = useContext(AppContext)

    //get the number of transactions for each user and store in array
    const numberOfTransactionsArray = users.map(user => getNumberOfUserTransactions(user.id, transactions));

    const formatDate = date => {
        let formattedDate = date.replace(/-|\s/g, "")

        return moment(formattedDate.substr(0, 8), "YYYYMMDD").fromNow();
    }

    return (
        <div className={classes.root}>
            <Toolbar />
            <Container>
                <Typography className={classes.usersText}>
                    USERS
            </Typography>
            </Container>

            {/* users scrollable list */}
            <List dense className={classes.list}>
                {users.length > 0 ? users.map((user, i) => <div key={user.id} className={classes.listItem}>
                    {/* each user */}
                    <ListItem style={{ backgroundColor: activeUser?.id === user.id && 'rgba(231, 236, 237, 0.5)' }}>
                        <ListItemAvatar>
                            <Avatar alt='image' src={user.avatar} className={classes.avatar} />
                        </ListItemAvatar>
                        <ListItemText disableTypography>
                            <Typography className={classes.userName} gutterBottom>{`${user.first_name} ${user.last_name}`}</Typography>
                            <Typography className={classes.userTx}>{`${numberOfTransactionsArray[i]} Transactions • Joined ${formatDate(user.created_at)}`}</Typography>
                        </ListItemText>
                        <ListItemSecondaryAction >
                            <IconButton onClick={() => setActiveUser(user.id)} >
                                <ChevronRightIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
                ) : null}
            </List>

        </div>
    )
}

export default Sidebar
