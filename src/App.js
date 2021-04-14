import "./styles.css";
import useToast from "./hooks/useToast";

export default function App() {
  const {
    successToast,
    warningToast,
    errorToast,
    infoToast,
    customToast
  } = useToast();
  const handleSuccessToast = () => successToast("Hello from toast!");
  const handleWarningToast = () => warningToast("Hello from toast!");
  const handleErrorToast = () => errorToast("Hello from toast!");
  const handleInfoToast = () => infoToast("Hello from toast!");
  const handleNoMessageToast = () => successToast();
  const handleCustomToast = () =>
    customToast({
      isOpen: true,
      message: "Hola",
      variant: "error"
    });

  return (
    <div className="App">
      <h1>Hello Function</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleSuccessToast}>Success Toast!</button>
      <button onClick={handleWarningToast}>Warning Toast!</button>
      <button onClick={handleErrorToast}>Error Toast!</button>
      <button onClick={handleInfoToast}>Info Toast!</button>
      <button onClick={handleNoMessageToast}>No message Toast!</button>
      <button onClick={handleCustomToast}>Custom Toast!</button>
    </div>
  );
}
