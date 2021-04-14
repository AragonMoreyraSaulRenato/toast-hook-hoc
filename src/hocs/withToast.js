import React from "react";
import { ToastContext } from "../context/ToastContext";

const withToast = (Component) => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <ToastContext.Consumer>
      {(toastContext) => (
        <Component
          {...props}
          {...toastContext}
          customToast={toastContext.setToastConfig}
          ref={ref}
        />
      )}
    </ToastContext.Consumer>
  ));

  const name = Component.displayName || Component.name;
  WrappedComponent.displayName = `WithToast(${name})`;

  return WrappedComponent;
};

export default withToast;
