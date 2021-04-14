import React from "react";
import withToast from "./hocs/withToast";

class AppClass extends React.Component {
  componentDidMount() {
    this.props.setToastConfig({
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      }
    });
  }

  handleSuccessToast = () => this.props.successToast("Hello from toast!");
  handleWarningToast = () => this.props.warningToast("Hello from toast!");
  handleErrorToast = () => this.props.errorToast("Hello from toast!");
  handleInfoToast = () => this.props.infoToast("Hello from toast!");
  handleNoMessageToast = () => this.props.successToast();
  handleCustomToast = () =>
    this.props.customToast({
      isOpen: true,
      message: "Hola",
      variant: "error"
    });

  render() {
    return (
      <div className="App">
        <h1>Hello Class</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.handleSuccessToast}>Success Toast!</button>
        <button onClick={this.handleWarningToast}>Warning Toast!</button>
        <button onClick={this.handleErrorToast}>Error Toast!</button>
        <button onClick={this.handleInfoToast}>Info Toast!</button>
        <button onClick={this.handleNoMessageToast}>No message Toast!</button>
        <button onClick={this.handleCustomToast}>Custom Toast!</button>
      </div>
    );
  }
}

export default withToast(AppClass);
