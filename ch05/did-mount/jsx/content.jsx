/**
* The DOM node information is obtained via the React DOM’s
* utility function ReactDOM.findDOMNode(), to which you pass the class.
*/
class Content extends React.Component {
  constructor(props) {
    super(props)
	let sWho = "Content::constructor";
    console.log(`${sWho}(): I log, therefore I am`);
	this.lecture = "The DOM node information is obtained via the React DOM’s utility function ReactDOM.findDOMNode(), to which you pass the class";
    console.log(`${sWho}(): ${this.lecture}...`);
  }
  componentWillMount() {
    console.log("componentWillMount(): ReactDOM.findDOMNode(this)=",ReactDOM.findDOMNode(this))
  }
  componentDidMount() {
    console.log("componentDidMount(): ReactDOM.findDOMNode(this)=",ReactDOM.findDOMNode(this))
    //console.dir(ReactDOM.findDOMNode(this))
  }
  render() {
    console.log('Render')
    return (
      <div>
        <h3>Azat Says: "{this.lecture}"</h3>
        <h2 style={{fontFamily: 'courier', color: 'green'}}>Let off some steam, Bennett!</h2>
      </div>
    )
  }
}
