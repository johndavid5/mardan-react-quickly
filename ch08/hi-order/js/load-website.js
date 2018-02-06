var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const LoadWebsite = Component => {

  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state = { label: 'Run', handleClick: this.handleClick.bind(this) };
    }
    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html';
    }
    handleClick(event) {
      // Loads the react website into iframe...
      document.getElementById('frame').src = this.getUrl();
      document.getElementById('header').innerHTML = this.getUrl();
      document.getElementById('anchor').href = this.getUrl();
    }
    componentDidMount() {
      let sWho = "LoadWebsite::componentDidMount";
      console.log(`${sWho}(): ReactDOM.findDOMNode(this)=`, ReactDOM.findDOMNode(this));
    }
    render() {
      let sWho = "LoadWebsite::render";
      console.log(`${sWho}(): this.state = `, this.state);

      // Pass `state` and `props` fields as properties using 
      // the "spread" operator `...`
      return React.createElement(Component, _extends({}, this.state, this.props));
    }
  }

  // Gotta set static attributes outside of the class definition...
  _LoadWebsite.displayName = 'EnhancedComponent';

  return _LoadWebsite;
};