class Logger extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor()...')
  }
  componentWillMount() {
    console.log('componentWillMount() is triggered...')
  }
  componentDidMount(e) {
    console.log('componentDidMount() is triggered...')
    console.log('DOM node: ', ReactDOM.findDOMNode(this))
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps() is triggered...')
    console.log('new props: ', newProps)
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate() is triggered...')
    console.log('new props: ', newProps)
    console.log('new state: ', newState)
    return true
  }
  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate() is triggered...')
    console.log('new props: ', newProps)
    console.log('new state: ', newState)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate() is triggered...')
    console.log('prev props: ', prevProps)
    console.log('prev state: ', prevState)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()...')
  }
  render() {
    // console.log('rendering... Display')
    return (
      <div style={{backgroundColor: 'black', color: 'green', fontFamily: 'courier', fontWeight: 'bold', fontSize: '200%', display: 'inline-block', padding: '10px 12px 10px 10px'}}>{this.props.time}</div>
    )
  }
}
