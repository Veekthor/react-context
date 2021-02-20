import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const options = {
  title: "Title",
  message: "Message",
  buttons: [
    {
      label: "Yes",
      onClick: () => alert("Click Yes")
    },
    {
      label: "No",
      onClick: () => alert("Click No")
    }
  ],
  childrenElement: () => <div />,
  customUI: ({ onClose }) => <div>Custom UI</div>,
  closeOnEscape: true,
  closeOnClickOutside: true,
  willUnmount: () => {},
  afterClose: () => {},
  onClickOutside: () => {},
  onKeypressEscape: () => {},
  overlayClassName: "overlay-custom-class-name"
};

export const AppContext = React.createContext();
class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });

    // confirmAlert({
    //     title: 'Window Size',
    //     message: `${windowWidth} - ${windowHeight}`,
    //     buttons: [
    //       {
    //         label: 'OK',
    //         onClick: () => console.log()
    //       }
    //     ]
    //   });
  }

  //Now you can place all of your logic here
  //instead of cluttering your app component
  //using this components state as your context value
  //allows you to easily write funcitons to change
  //your context just using the native setState
  //you can also place functions in your context value
  //to call from anywhere in your app
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default Context;
