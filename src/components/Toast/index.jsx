import React, { memo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

import useStyles from "./style";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const Toast = ({
  anchorOrigin,
  className,
  message,
  onClose,
  variant,
  isOpen,
  autoHideDuration,
  ...other
}) => {
  const classes = useStyles();
  const Icon = variantIcon[variant];

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={isOpen}
      onClose={onClose}
      className={classes.root}
      autoHideDuration={autoHideDuration}
    >
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        {...other}
      />
    </Snackbar>
  );
};

Toast.propTypes = {
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]),
  isOpen: PropTypes.bool,
  autoHideDuration: PropTypes.number
};

Toast.defaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right"
  },
  className: "",
  message: "",
  onClose: () => {},
  variant: "info",
  isOpen: false,
  autoHideDuration: 6000
};

export default memo(Toast);
