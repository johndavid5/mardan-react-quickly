class Content extends React.Component {

  constructor() {
    super();
  }

  onClick() {
    alert("Let off some steam, Bennett!");
  }

  render() {
    let number = 1;
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, { title: number }),
      React.createElement(Button, null),
      React.createElement(Button, { buttonLabel: "Send Email", email: "not-a-valid-email" }),
      React.createElement(Button, { handler: "alert('Let off some steam, Bennett!')", buttonLabel: "Click Me!", email: "hi@azat.co" })
    );
  }
}