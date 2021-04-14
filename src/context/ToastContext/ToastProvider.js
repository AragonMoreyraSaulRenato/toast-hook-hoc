import { useState, useCallback } from "react";
import Toast from "../../components/Toast";
import ToastContext from "./ToastContext";

const initialState = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "right"
  },
  className: "",
  message: "",
  variant: "info",
  isOpen: false,
  autoHideDuration: 2000
};

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState({ ...initialState });

  const openToast = useCallback((message, variant) => {
    setToast((oldToast) => ({
      ...oldToast,
      message,
      variant,
      isOpen: true
    }));
  }, []);

  const successToast = useCallback(
    (message = "Success!") => {
      openToast(message, "success");
    },
    [openToast]
  );

  const warningToast = useCallback(
    (message = "Warning!") => {
      openToast(message, "warning");
    },
    [openToast]
  );

  const errorToast = useCallback(
    (message = "Error!") => {
      openToast(message, "error");
    },
    [openToast]
  );

  const infoToast = useCallback(
    (message = "Atention!") => {
      openToast(message, "info");
    },
    [openToast]
  );

  const setToastConfig = useCallback((configToast = {}) => {
    setToast((oldToast) => ({ ...oldToast, ...configToast }));
  }, []);

  const onClose = useCallback(() => {
    setToast((oldToast) => ({ ...oldToast, isOpen: false }));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        successToast,
        warningToast,
        errorToast,
        infoToast,
        setToastConfig
      }}
    >
      {children}
      <Toast
        className={toast.className}
        isOpen={toast.isOpen}
        variant={toast.variant}
        anchorOrigin={toast.anchorOrigin}
        message={toast.message}
        autoHideDuration={toast.autoHideDuration}
        onClose={onClose}
      />
    </ToastContext.Provider>
  );
}
