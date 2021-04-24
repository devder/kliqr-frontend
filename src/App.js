import Details from './components/Details/details';
import Sidebar from './components/Sidebar/sidebar';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appbar: {
    position: 'absolute',
    width: '100%',
    height: 49,
    left: 0,
    top: 0,
    background: '#413C69'
  }
}))

function App() {
  const classes = useStyles()
  return (
    < div style={{ height: '100vh' }}>
      <AppBar className={classes.appbar} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Details />
      </div>
    </div>
  );
}

export default App;
