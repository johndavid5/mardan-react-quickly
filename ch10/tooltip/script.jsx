class Tooltip extends React.Component {

	constructor(props){
		super(props);
		this.state = { opacity: false };
		this.toggle = this.toggle.bind(this);
	}

	/* 
	* A tricky thing about tooltip help text is that you must
	* place the help text close to the element the mouse is
	* hovering over. To do so, you need to get the position
	* of the component using tooltipNode. You position the
	* tooltip text using offsetTop and offsetLeft on the DOM
	* node. These are DOM Node properties from the HTML standard
	* (https://developer.mozilla.org/en-US/docs/Web/API/Node),
	* not a React thing:
	*/
	toggle(){
		const sWho = "Tooltip::toggle-without ES6 object destructuring";

		console.log(`${sWho}(): this.state = `, this.state);

		const tooltipNode = ReactDOM.findDOMNode(this);

		this.setState({
			opacity: !this.state.opacity,
			top: tooltipNode.offsetTop,
			left: tooltipNode.offsetLeft
		});
	}

	/* Using ES6 object destructuring... */
	/*
	toggle(){
		const sWho = "Tooltip::toggle-with ES6 object destructuring";
		console.log(`${sWho}()...`);
		const { offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this);

		this.setState({
			opacity: !this.state.opacity,
			top,
			left
		}
	}
	*/

	render(){
		const style = {
			zIndex: this.state.opacity ? 1000 : -1000,
			opacity: +this.state.opacity, // "+" operator converts from bool to 0 or 1
			top: (this.state.top || 0) + 20,
			left: (this.state.left || 0) - 30
		};

		return (
			<div style={{display: 'inline'}}>
				<span style={{color: 'blue'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
					{this.props.children}
				</span>
				<div className="tooltip bottom" style={style} role="tooltip">
					<div className="tooltip-arrow"></div>
					<div className="tooltip-inner">
						{this.props.text}
					</div>
				</div>
			</div>
		);
	}/* render() */
}/* class Tooltip */


ReactDOM.render(
	<div>
  <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>.
    ...
    The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
  </div>,
  document.getElementById('tooltip')
);
