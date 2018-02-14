const React = require('react');

/* How to make your own naive router without really trying... */
module.exports = class MyRouter extends React.Component {
	constructor(props){
		let sWho = "MyRouter::constructor";

		super(props);
		console.log(`${sWho}(): window.location.hash = ${window.location.hash}...`);
		this.state = {hash: window.location.hash};
		this.updateHash = this.updateHash.bind(this);
	}

	render(){
		if( this.props.mapping[this.state.hash]){	
			return this.props.mapping[this.state.hash];
		}
		else{
			return this.props.mapping['*'];
		}
	}

	updateHash(event){
		let sWho = "MyRouter::updateHash";
		console.log(`${sWho}(): window.location.hash = ${window.location.hash}...`);
		this.setState({hash: window.location.hash});
	}

	componentDidMount(){
		window.addEventListener('hashchange', this.updateHash, false);
	}

	componentWillUnmount(){
		window.removeEventListener('hashchange', this.updateHash, false);
	}
};
