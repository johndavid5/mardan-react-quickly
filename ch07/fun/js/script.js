class FunReactElement extends React.Component {

	constructor(props) {
		super(props);
		this.DEFAULT_TITLE = "They call me Mr. Tibbs!";
		this.state = { title: this.DEFAULT_TITLE };
	}

	handleChange(event) {
		let sWho = "FunReactElement::handleChange";
		console.log(`${sWho}(): event.target.value = "${event.target.value}"...`);
		this.setState({ title: event.target.value });
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				{ style: { color: 'purple', fontFamily: 'courier' } },
				"THUMPER: But first...we're gonna have some fun...!"
			),
			React.createElement(
				"h3",
				{ style: { color: 'brown', fontFamily: 'courier' } },
				"BAMBI: Try modifying this form field value, Big Boy...!"
			),
			React.createElement(
				"h4",
				null,
				"The improper way to do a read-only field:"
			),
			React.createElement("input", { type: "text", name: "title", value: this.DEFAULT_TITLE }),
			React.createElement(
				"h4",
				null,
				"The proper way to do a read-only field:"
			),
			React.createElement("input", { type: "text", name: "title", readOnly: true, value: this.DEFAULT_TITLE }),
			React.createElement(
				"h4",
				null,
				"The proper way to do an editable react field...one-way binding via onChange()..."
			),
			React.createElement("input", { type: "text", name: "title", placeholder: "Title:", value: this.state.title, onChange: this.handleChange.bind(this) }),
			React.createElement(
				"h2",
				{ style: { color: 'green', fontFamily: 'courier' } },
				"Let off some steam, Bennett!"
			)
		);
	}
}

ReactDOM.render(React.createElement(FunReactElement, null), document.getElementById('content'));