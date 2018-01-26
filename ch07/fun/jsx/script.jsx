class FunReactElement extends React.Component {

	constructor(props){
		super(props);
		this.DEFAULT_TITLE = "They call me Mr. Tibbs!";
		this.state = { title: this.DEFAULT_TITLE };
	}

	handleChange(event){
		let sWho = "FunReactElement::handleChange";
		console.log(`${sWho}(): event.target.value = "${event.target.value}"...`);
		this.setState({title: event.target.value});
	}

	render(){
		return (
		<div>
		<h3 style={{color: 'purple', fontFamily: 'courier'}}>THUMPER: But first...we're gonna have some fun...!</h3>
		<h3 style={{color: 'brown', fontFamily: 'courier'}}>BAMBI: Try modifying this form field value, Big Boy...!</h3>
		<h4>The improper way to do a read-only field:</h4>
		<input type="text" name="title" value={this.DEFAULT_TITLE} />
		<h4>The proper way to do a read-only field:</h4>
		<input type="text" name="title" readOnly={true} value={this.DEFAULT_TITLE} />
		<h4>The proper way to do an editable react field...one-way binding via onChange()...</h4>
		<input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
		<h2 style={{color: 'green', fontFamily: 'courier'}}>Let off some steam, Bennett!</h2>
		</div>
		);
	}
}


ReactDOM.render(
  <FunReactElement/>,
  document.getElementById('content')
);
