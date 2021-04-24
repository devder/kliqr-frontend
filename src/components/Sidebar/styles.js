import { makeStyles } from '@material-ui/core'


export default makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 411,
        borderRight: '1px solid rgb(242,242,242)',
        height: '100vh'

    },
    list: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
    },
    usersText: {
        fontFamily: 'Manrope',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '20px',
        letterSpacing: 0,
        padding: '5px 0 5px 0',
        color: 'rgba(0,0,0,0.76)'

    },
    userName: {
        fontFamily: 'Manrope',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '27px',
        letterSpacing: 0,
    },

    userTx: {
        fontFamily: 'Manrope',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '14px',
        letterSpacing: 0,
    },
    avatar: { width: 45, height: 45, }
}))