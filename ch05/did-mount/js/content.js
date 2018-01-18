class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor(): I log, therefore I am');
  }
  componentWillMount() {
    console.log("componentWillMount(): ReactDOM.findDOMNode(this)=", ReactDOM.findDOMNode(this));
  }
  componentDidMount() {
    console.log("componentDidMount(): ReactDOM.findDOMNode(this)=", ReactDOM.findDOMNode(this));
    //console.dir(ReactDOM.findDOMNode(this))
  }
  render() {
    console.log('Render');
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { style: { fontFamily: 'courier', color: 'green' } },
        "Let off some steam, Bennett!"
      )
    );
  }
}