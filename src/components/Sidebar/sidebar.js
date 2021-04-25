import React, { useContext } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Typography, Container, Toolbar }
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

    const { users, transactions } = useContext(AppContext)

    const numberOfTransactionsArray = users.map(user => getNumberOfUserTransactions(user.id, transactions));
    console.log(numberOfTransactionsArray);

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
            <List dense className={classes.list}>
                {users.length > 0 ? users.map((user, i) => <div key={user.id} style={{ marginBottp: '15px 0' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt='image' src={user.avatar} className={classes.avatar} />
                        </ListItemAvatar>
                        <ListItemText disableTypography>
                            <Typography className={classes.userName} gutterBottom>{`${user.first_name} ${user.last_name}`}</Typography>
                            <Typography className={classes.userTx}>{`${numberOfTransactionsArray[i]} Transactions • Joined ${formatDate(user.created_at)}`}</Typography>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <ChevronRightIcon />
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
                ) : null}
            </List>

        </div>
    )
}

export default Sidebar
