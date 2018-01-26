class MouseFixed extends React.Component {
  constructor(props) {
    super(props);
    this.oWho = "MouseFixed";
  }
  handleMouseOver(event) {
    event.persist();
    console.log(`${this.oWho}: mouse is over with event`);
    window.e = event; // Anti-pattern
    console.log(`${this.oWho}: event=`);
    console.dir(event);
    console.log(`${this.oWho}: event.target=`, event.target);
    console.dir(event.target);
    setTimeout(() => {
      console.log("2345 milliseconds later...we have...");
      console.log('event.target=', event.target);
      console.table(event.target);
      console.log('window.e.target=', window.e.target);
      console.table(window.e.target);
    }, 2345);
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        {
          style: { border: '1px dotted purple' },
          onMouseOver: this.handleMouseOver.bind(this) },
        "ALICE: O Mouse, do you know the way out of this pool? I am very tired of swimming about here, O Mouse! ",
        React.createElement("br", null),
        "MOUSE: Open DevTools and move your mouse cursor over here"
      )
    );
  }
}