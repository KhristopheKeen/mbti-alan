import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        padding: '0 30px',
        width: '100%',
        margin: 0,

    },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    color: 'white',
    borderRadius: 30,
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  
});