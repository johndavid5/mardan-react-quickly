class SaveButton extends React.Component {

	constructor(props){
		super(props);
		//this.handleSave = this.handleSave.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
	}
	
	handleSave(event){
		console.log("click: this=",this,"event=", event);
	}

	handleMouseMove(event){
		console.log("mouseMove: this=",this,"event=", event);
		console.log("event.screenX=", event.screenX);
		console.log("event.screenY=", event.screenY);
	}

	render(){
		return <button onMouseMove={this.handleMouseMove} onClick={this.handleSave.bind(this)}>Save</button>
	}
}

/*
* To register an event listener for the capture phase, append Capture to an event name.
* For example, instead of using onMouseOver, you use onMouseOverCapture to handle the
* mouseover event in the capture phase.
*/
class Mouse extends React.Component {

	constructor(props){
		super(props);
		this.counter = 0;
		this.state = { 'overAndOut': false };
	}

	render() {

		return <div>
		<div style={{border: '1px solid red'}}
		onMouseOverCapture={((event)=>{this.counter++; console.log(`${this.counter}: mouse over on capture event, Moe...`); console.log("event=",event,"this=",this);}).bind(this)}
        onMouseOver={((event)=>{this.setState({'overAndOut': true}); this.counter++; console.log(`${this.counter}: mouse over on bubbling event, Moe...`); console.log("event=",event,"this=",this);}).bind(this)}
        onMouseOut={((event)=>{this.setState({'overAndOut': false;}); this.counter++; console.log(`${this.counter}: mouse out on bubbling event, Moe...`); console.log("event=",event,"this=",this);}).bind(this)}
		>Open DevTools and move your mouse cursor over here...if you dare...
		</div>
		<div>
		{/*(this.state.overAndOut)?"SHEMP: Gee, Moe, I'm sorry, Moe, what mo' can a fella say, that's all there is, there ain't no mo'...":""*/}
		</div>
		</div>
	}
}

// Azat Mardan. React Quickly: Painless web apps with React, JSX, Redux, and GraphQL (Kindle Locations 2782-2787).
// Manning Publications. Kindle Edition. 

var helloWorldReactElement = (
	<div>
	<h1 style={{color: 'purple'}}>Hello, World!</h1>
	<button onClick={function(event){ console.log("this=",this,"event=", event); }}>Click Me! I'm a foolishly un-bound ol' fashioned function.</button><br />
	<button onClick={(function(event){ console.log("this=",this,"event=", event); }).bind(this)}>Click Me! I'm a bound ol' fashioned function.</button><br />
	<button onClick={(event)=>{console.log("this=",this,"event=", event);}}> Click Me! I'm a non-bound newfangled arrow function.</button><br />
	<br />
	<Mouse />
	<SaveButton />
	</div>
);


ReactDOM.render(
  helloWorldReactElement,
  document.getElementById('content')
);
