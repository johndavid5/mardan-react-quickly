class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textbook: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ textbook: event.target.value });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { "for": "joe" },
        "Uncontrolled Element (Controversial...may become a React antipattern...):"
      ),
      React.createElement("input", {
        type: "text",
        id: "joe",
        onChange: this.handleChange,
        placeholder: "Eloquent TypeScript: Myth or Reality" }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.state.textbook
      )
    );
  }
}