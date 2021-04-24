import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: { display: 'flex', flexGrow: 1, flexDirection: 'column', height: '100vh' },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // height: '90vh',
    },
    avatar: {
        height: 100,
        width: 100
    },
    header: {
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'Manrope',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '41px',
        letterSpacing: 0,
        marginTop: theme.spacing(2)
    },
    sub: {
        fontFamily: 'Manrope',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: 0
    },
    paper: {
        width: '150px',
        margin: theme.spacing(1),
        padding: '24px 16px',
        borderRadius: 11
    },
    paperHead: {
        fontFamily: 'Manrope',
        fontSize: 9,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '12px',
        letterSpacing: 0,
        color: '#413C69'
    },
    paperSub: {
        fontFamily: 'Space Mono',
        fontSize: 28,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '41px',
        letterSpacing: 0,
        color: '#4A47A3'
    },
    transactions: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '80px 0'
    },
    footer: {
        paddingBottom: 80,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'

    },
    recurringExpensesText: {
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        fontFamily: 'Manrope',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '20px',
        letterSpacing: 0,
        color: '#000000C2',
    },
    icon: {
        width: 63, height: 45,
        background: "#A7C5EB url('https://api.kliqr.com/images/icons/tags/gotv.png') no-repeat center",
        backgroundSize: '25px 25px',
        borderRadius: 11, padding: theme.spacing(1),
        fontSize: 50
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
    list: {
        width: '80%',
        position: 'relative',
        overflow: 'auto',
        height: 120
    },

}))