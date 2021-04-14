import { useContext, useEffect } from "react";
import { ToastContext } from "../context/ToastContext";

export default (config = {}) => {
  const { setToastConfig, ...toastContext } = useContext(ToastContext);

  // eslint-disable-next-line
  useEffect(() => setToastConfig(config), []);
  return { customToast: setToastConfig, ...toastContext };
};
