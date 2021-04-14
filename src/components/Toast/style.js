import { makeStyles } from "@material-ui/core/styles";
import { amber, green, indigo } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    zIndex: 10000
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: indigo[50]
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));
