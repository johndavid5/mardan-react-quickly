class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleRadio = this.handleRadio.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this)
    this.prank = this.prank.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
	this.multiOptions=["backbone","meteor","react","jQuery"];

    this.state = {
      description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
      description_two: "Let off some steam, Bennett!",
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node',
      selectedMultiValues: ['react','jQuery']
    }
  }

  static upperCaseIt(input){
	return input.substring(0,1).toUpperCase() + input.substring(1).toLowerCase();
  }

  static whatType(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  handleRadio(event) {
	let sWho = "handleRadio";

    // let obj = {}; // Uncheck all of them in an uncontrolled obliterative annihilative fashion,
    // leading to React warning message:
	//   Warning: Content is changing a controlled input of type radio to be uncontrolled.
    //   Input elements should not switch from controlled to uncontrolled (or vice versa).
    //   Decide between using a controlled or uncontrolled input element for the lifetime of
    //   the component. More info: https://fb.me/react-controlled-components 
    let obj = { angular: false, react: false, polymer: false};  // Uncheck all of them in a controlled fashion...

    // Check this one...
	console.log(`${sWho}(): Setting '${event.target.value}' to true in dha state.radioGroup, Moe...`);
    obj[event.target.value] = event.target.checked // always true

	console.log(`${sWho}(): SHEMP: Moe, callin' setState: { radioGroup: `, obj, '}...');
    
    this.setState({radioGroup: obj})
  }

  handleCheckbox(event) {
	let sWho = "handleCheckbox";

    let obj = Object.assign( this.state.checkboxGroup ); // clone it with Object.assign to avoid any assign-by-reference unpleasantries...

	console.log(`${sWho}(): Setting '${event.target.value}' to ${event.target.checked} in dha state.checkboxGroup, Moe...`);
    obj[event.target.value] = event.target.checked // true or false

	console.log(`${sWho}(): SHEMP: Moe, callin' setState: { checkBoxGroup: `, obj, '}...');
    this.setState({checkboxGroup: obj})
  }

  handleTextAreaChange(event) {
	let sWho = "handleTextAreaChange";
    console.log(`${sWho} event.target.name=${event.target.name}...`);
    console.log(`${sWho} event.target.value=${event.target.value}...`);
	let sName = event.target.name;
	let sValue = event.target.value;
    let obj = {};
	obj[sName] = sValue;
    console.log(`${sWho}: SHEMP: Moe, callin' setState(`, obj, `}...`);
	this.setState( obj );
  }

  handleChange(event) {
	let sWho="handleChange";
    console.log(`${sWho}(): event.target.value=`, event.target.value, ', event.target.checked = ', event.target.checked)
  }
  handleInput(event){
	let sWho="handleInput";
    console.log(`${sWho}(): event.target.value=`, event.target.value, ', event.target.checked = ', event.target.checked)
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  /* Added mode: 'no-cors' to fetch {properties} to prevent...
  *   Failed to load http://webapplog.com/: Redirect from 'http://webapplog.com/' to
  *   'https://webapplog.com/' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  *   header is present on the requested resource. Origin 'http://localhost:8000' is therefore not
  *   allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors'
  *   to fetch the resource with CORS disabled.
  *
  * localhost/:1 Uncaught (in promise) TypeError: Failed to fetch
  */
  handleSubmit(event){
	let sWho="handleSubmit";
    console.log(`${sWho}: event.target.value=${event.target.value}, event.target.checked=${event.target.checked}...`);
    console.log(`${sWho}: Doing a POST to ${this.props['data-url']} with body ${JSON.stringify(this.state)}...`);
    fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state), mode: 'no-cors'})
      .then((response)=>{console.log(`response.status=${response.status}\nresponse.statusText=${response.statusText}\nresponse.ok(200-299)=${response.ok}...`);return response.text()})
      .then((data)=>{console.log('Submitted: ', data)})
  }

  handleMultiSelectChange(event) {
	let sWho = "handleMultiSelectChange";
    console.log(sWho + "(): SHEMP: Moe, event=", event );
    console.log(sWho + "(): SHEMP: Moe, event.target=", event.target );
    console.log(sWho + "(): SHEMP: Moe, event.target.value=",event.target.value);
    console.log(sWho + "(): SHEMP: Moe, event.target.selected=",event.target.selected)

	//let prop;
	//for( prop in event.target ){
    //	console.log(sWho + "(): SHEMP: Moe, event.target[" + prop + "] = ",event.target[prop])
	//}
	
    let arrPrevSelected = Array.from( this.state.selectedMultiValues ); // clone it with Array.from() or originArray.slice() to avoid any assign-by-reference unpleasantries...
    console.log(sWho + "(): SHEMP: Moe, arrPrevSelected = ", arrPrevSelected );


    console.log(sWho + "(): SHEMP: Moe, typeof( event.target ) = ", typeof(event.target) );
    console.log(sWho + "(): SHEMP: Moe, Array.isArray( event.target ) = ", Array.isArray(event.target) );

    // It's an array-like HTMLSelectElement...a DOM element...
    console.log(sWho + "(): SHEMP: Moe, Content.whatType ( event.target ) = ", Content.whatType(event.target) );

    console.log(sWho + "(): SHEMP: Moe, event.target.length= ", event.target.length);

// Too bad event.target is not an array...it's an HTMLSelectElement...a DOM element...
//	let arrNewSelected = [];
//	event.target.forEach( (target,index)=>{
//    	console.log(sWho + "(): SHEMP: Moe, event.target[" + i + "].value = ", event.target[i].value );
//    	console.log(sWho + "(): SHEMP: Moe, event.target[" + i + "].selected = ", event.target[i].selected );
//        console.log(sWho + "(): SHEMP: Moe, Content.whatType ( event.target[i] ) = ", Content.whatType(event.target[i]) );
//		if( event.target[i].selected ){
//			this.push(event.target[i].value);
//		}
//	}, arrNewSelected);

    // Construct arrNewSelected based on selected options...
    //
	// Hmmm...I wonder if there's a less DOM-dependent way to do this...?
    // But for the single-select, we _are_ using event.target -- the DOM object -- just as
    // we're doing here...
    //
    let i;
	let arrNewSelected = [];
	for( i=0; i<event.target.length; i++ ){
		let item = event.target.item(i);
    	console.log(sWho + "(): SHEMP: Moe, event.target[" + i + "].value = ", item.value );
    	console.log(sWho + "(): SHEMP: Moe, event.target[" + i + "].selected = ", item.selected );
		// HTMLOptionElement...
        console.log(sWho + "(): SHEMP: Moe, Content.whatType ( event.target[" + i + "] ) = ", Content.whatType( item ) );
		if( item.selected ){
			arrNewSelected.push(item.value);
		}
	}

//	if( event.target.selected || true ){
//		// Add element if not found in array...
//		if( ! arrSelected.includes(event.target.value) ){
//    		console.log(sWho + "(): arrSelected does NOT include event.target.value = ",event.target.value,"so pushing it onto array...");
//			arrSelected.push( event.target.value );	
//		}
//		else {
//    		console.log(sWho + "(): arrSelected does include event.target.value = ",event.target.value,"so not modifying array...");
//		}
//	}
//	else{
//		// Remove element if found in array...
//		let leIndex = arrSelected.indexOf(event.target.value);
//		if( leIndex >= 0 ){
//    		console.log(sWho + "(): arrSelected does include event.target.value = ",event.target.value," at ", leIndex, " removing it from array...");
//			arrSelected.splice( leIndex, 1 ); // remove element at leIndex...
//		}
//		else {
//    		console.log(sWho + "(): arrSelected does NOT include event.target.value = ",event.target.value,", so not modifying array...");
//		}
//	}

    console.log(sWho + "(): SHEMP: Moe, arrNewSelected = ", arrNewSelected );

	var obj = {selectedMultiValues: arrNewSelected};

    console.log(sWho + "(): SHEMP: Moe, callin' this.setState(", obj, ")...");

	this.setState( obj );
	
  }

  handleSelectChange(event) {
	let sWho = "handleSelectChange";
    console.log(sWho + "(): SHEMP: Moe, event.target.value=",event.target.value,", event.target.selected=",event.target.selected)
	var obj = {selectedValue: event.target.value};
    console.log(sWho + "(): SHEMP: Moe, callin' setState(", obj, ")...");
    this.setState( obj ,
	 ()=> {
    	setTimeout( ()=>{ this.prank("node"); }, 3000 ); 
	} );
  }

  prank(value){
	let sWho = "prank";
	var obj = {selectedValue: value};
    console.log(`${sWho}(): SHEMP: Moe, callin' this.setState(${obj})...`);
    console.log(`${sWho}(): SHEMP: Moe, callin' this.setState(`, obj, `)...`);
	this.setState( obj );
	this.forceUpdate();
  }

  render() {
    return <div className="container">
      <form  onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text" name="new-book-title" readOnly={true} defaultValue="Node: The Best Parts"/>
        <hr/>
        <h2>input: password</h2>
        <input type="password" defaultValue="123456" onChange={this.handleChange} onInput={this.handleInput}/>
        <hr/>
        <h2>input: radio</h2>
        <label>
          <input type="radio" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
          Angular
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
          React
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
          Polymer
        </label>
        <hr/>
        <h2>input: checkbox</h2>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='node'
            checked={this.state.checkboxGroup['node']}
            onChange={this.handleCheckbox}/>
          Node
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='react'
            checked={this.state.checkboxGroup['react']}
            onChange={this.handleCheckbox}/>
          React
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='express'
            checked={this.state.checkboxGroup.express}
            onChange={this.handleCheckbox}/>
          Express
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='mongodb'
            checked={this.state.checkboxGroup['mongodb']}
            onChange={this.handleCheckbox}/>
          MongoDB
        </label>
        <hr/>
        <textarea
          name="description"
		  value={this.state.description}
          onChange={this.handleTextAreaChange}/>
        <hr/>
        <textarea
          name="description_two"
		  value={this.state.description_two}
          onChange={this.handleTextAreaChange}/>
        <hr/>
        Read Only TextArea:<br/>
		<textarea
          name="description1"
          value={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
		  readOnly={true}/>
        <hr/>
        <select name="langSelect" value={this.state.selectedValue} onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <hr/>
		Multi Select:<br />
        <select name="libSelect" multiple={true} value={this.state.selectedMultiValues} onChange={this.handleMultiSelectChange}>
		{ this.multiOptions.map( (el)=>{return ( <option value={el}>{Content.upperCaseIt(el)}</option> )} ) }
        </select>
        <hr/>
		Read Only Multi Select:<br />
        <select multiple={true} defaultValue={['meteor', 'react']} readOnly>
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jQuery">jQuery</option>
        </select>
        <hr/>
        <h2>input: first name [text]</h2>
        <input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
        <hr/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
        <hr/>
        <input type="text" name="title" value="Mr." />
      </form>
      <pre className="joe">this.state={JSON.stringify(this.state, null, ' ')}</pre>
    </div>
  }
}
