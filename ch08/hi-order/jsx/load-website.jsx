const LoadWebsite = (Component) => {

  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {label: 'Run', handleClick: this.handleClick.bind(this)} 
    }
    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html'
    }
    handleClick(event) {
	  // Loads the react website into iframe...
      document.getElementById('frame').src = this.getUrl();
      document.getElementById('header').innerHTML = this.getUrl();
      document.getElementById('anchor').href = this.getUrl();
    }
    componentDidMount() {
	  let sWho="LoadWebsite::componentDidMount";
      console.log(`${sWho}(): ReactDOM.findDOMNode(this)=`,ReactDOM.findDOMNode(this));
    }
    render() {
		let sWho="LoadWebsite::render";
		console.log(`${sWho}(): this.state = `, this.state)
	  
		// Pass `state` and `props` fields as properties using 
		// the "spread" operator `...`
		return <Component {...this.state} {...this.props} />
    }
  }

  // Gotta set static attributes outside of the class definition...
  _LoadWebsite.displayName = 'EnhancedComponent'

  return _LoadWebsite
}
