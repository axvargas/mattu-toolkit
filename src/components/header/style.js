import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,

  },
  title: {
    flexGrow: 1
  },
  typo: {
    fontWeight: 'bold',
    textAlign: 'center',

  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  tooltip: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  img: {
      width: "100%"
  }

}));
export default useStyles;