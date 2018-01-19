class SaveButton extends React.Component {

	constructor(props){
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
	}
	
	handleSave(event){
		console.log("click: this=",this,"event=", event);
	}

	handleMouseOver(event){
		console.log("mouseOver: this=",this,"event=", event);
		console.log("event.screenX=", event.screenX);
		console.log("event.screenY=", event.screenY);
	}

	render(){
		return <button onMouseMove={this.handleMouseOver} onClick={this.handleSave}>Save</button>
	}
}

class Mouse extends React.Component {
	render() {
		return <div>
		<div style={{border: '1px solid red'}}
		onMouseOverCapture={((event)=>{console.log('mouse over on capture event'); console.dir(event, this)}).bind(this)}
        onMouseOver={((event)=>{console.log('mouse over on bubbling event'); console.dir(event, this)}).bind(this)}
		>Open DevTools and move your mouse cursor over here
		</div>
		</div>
	}
}

// Azat Mardan. React Quickly: Painless web apps with React, JSX, Redux, and GraphQL (Kindle Locations 2782-2787).
// Manning Publications. Kindle Edition. 

var helloWorldReactElement = (
	<div>
	<h1 style={{color: 'purple'}}>Hello, World!</h1>
	<button onClick={(function(event){ console.log("this=",this,"event=", event); }).bind(this)}>Click Me!</button>
	<br />
	<Mouse />
	<SaveButton />
	</div>
);


ReactDOM.render(
  helloWorldReactElement,
  document.getElementById('content')
);
