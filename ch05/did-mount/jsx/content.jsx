class Content extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor(): I log, therefore I am')
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
        <h2 style={{fontFamily: 'courier', color: 'green'}}>Let off some steam, Bennett!</h2>
      </div>
    )
  }
}
