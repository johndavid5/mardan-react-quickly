class SaveButton extends React.Component {

	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
	}

	handleSave(event) {
		console.log("click: this=", this, "event=", event);
	}

	handleMouseOver(event) {
		console.log("mouseOver: this=", this, "event=", event);
		console.log("event.screenX=", event.screenX);
		console.log("event.screenY=", event.screenY);
	}

	render() {
		return React.createElement(
			"button",
			{ onMouseMove: this.handleMouseOver, onClick: this.handleSave },
			"Save"
		);
	}
}

class Mouse extends React.Component {

	constructor(props) {
		super(props);
		this.count = 0;
		this.state = { mouse: 'out' };
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.handleMouseOverCapture = this.handleMouseOverCapture.bind(this);
		this.handleMouseOutCapture = this.handleMouseOutCapture.bind(this);
	}

	handleMouseOver(event) {
		this.count++;
		console.log(this.count + ":", "mouseOver: this=", this, "event=", event);
		this.setState({ mouse: 'over' });
	}

	handleMouseOut(event) {
		this.count++;
		console.log(this.count + ":", "mouseOut: this=", this, "event=", event);
		this.setState({ mouse: 'out' });
	}

	handleMouseOverCapture(event) {
		this.count++;
		console.log(this.count + ":", "mouseOverCapture: this=", this, "event=", event);
	}

	handleMouseOutCapture(event) {
		this.count++;
		console.log(this.count + ":", "mouseOutCapture: this=", this, "event=", event);
	}

	render() {

		//let myStyle = {'fontFamily':'courier', 'fontWeight': 'bold'};

		//if( this.state.mouse == 'over' ){
		//	myStyle.display = 'block';
		//}
		//else {
		//	myStyle.display = 'hidden';
		//}

		//let shemp = <h4 style={myStyle}>SHEMP: Gee, Moe, I'm sorry, Moe, what mo' can a fella say, that's all there is, there ain't no mo'...hidden...?</h4>;

		let shemp;
		let line = React.createElement(
			"span",
			null,
			"SHEMP: Gee, Moe, I'm sorry, Moe,",
			React.createElement("br", null),
			" what mo' can a fella say,",
			React.createElement("br", null),
			"that's all there is,",
			React.createElement("br", null),
			" there ain't no mo'...Moe"
		);
		if (this.state.mouse == 'over') {
			//shemp = <h4 style={{'fontFamily':'courier', 'color': 'green', 'fontWeight': 'bold', 'display': 'block}}>{line}</h4>;
			shemp = React.createElement(
				"div",
				{ id: "shemp" },
				React.createElement("img", { style: { 'float': 'left' }, src: "/common/images/corny-cassanovas-0107.png" }),
				React.createElement(
					"h4",
					{ style: { 'fontFamily': 'courier', 'color': 'green', 'fontWeight': 'bold' } },
					line
				)
			);
		} else {
			shemp = React.createElement("div", { id: "shemp" });
			//shemp = <h4 style={{'fontFamily':'courier', 'color': 'green', 'fontWeight': 'bold', 'display': 'none'}}>{line}</h4>;
		}

		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ style: { border: '2px dashed purple' },
					onMouseOverCapture: this.handleMouseOverCapture,
					onMouseOutCapture: this.handleMouseOutCapture,
					onMouseOver: this.handleMouseOver,
					onMouseOut: this.handleMouseOut
				},
				"Open DevTools and move your mouse cursor over here",
				React.createElement(
					"h3",
					{ style: { 'color': 'white', 'backgroundColor': 'brown' } },
					"The mouse is ",
					this.state.mouse.toUpperCase(),
					"."
				)
			),
			shemp
		);
	}

	//render() {
	//	return <div>
	//	<div style={{border: '1px solid red'}}
	//	onMouseOverCapture={((event)=>{console.log('mouse over on capture event'); console.dir(event, this)}).bind(this)}
	//	onMouseOutCapture={((event)=>{console.log('mouse over on capture event'); console.dir(event, this)}).bind(this)}
	//    onMouseOver={((event)=>{console.log('mouse over on bubbling event'); console.dir(event, this)}).bind(this)}
	//    onMouseOut={((event)=>{console.log('mouse over on bubbling event'); console.dir(event, this)}).bind(this)}
	//	>Open DevTools and move your mouse cursor over here
	//	</div>
	//	</div>
	//}
}

// Azat Mardan. React Quickly: Painless web apps with React, JSX, Redux, and GraphQL (Kindle Locations 2782-2787).
// Manning Publications. Kindle Edition. 

var helloWorldReactElement = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		{ style: { color: 'purple' } },
		"Hello, World!"
	),
	React.createElement(
		"button",
		{ onClick: function (event) {
				console.log("this=", this, "event=", event);
			}.bind(this) },
		"Click Me!"
	),
	React.createElement(SaveButton, null),
	React.createElement("br", null),
	React.createElement(Mouse, null)
);

ReactDOM.render(helloWorldReactElement, document.getElementById('content'));