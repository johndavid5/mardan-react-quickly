class Clock extends React.Component {

  constructor(props){
    /* Don't forget to invoke `super()` with properties;
	* otherwise the logic in the parent (`React.Component`)
	* won't work.
	*/
    super(props);  
      //this.state = { currentTime: (new Date()).toLocaleString() }
		  //
      this.launchClock();

	  let date = new Date();
      this.state = {
        currentTimeString: Clock.getTimeString(date),
        currentDateString: Clock.getDateString(date),
      }
  }

  launchClock(){
    // NOTE: Lucky for you, you're using ES6+/ES2015+
    // fat-arrow to autobind `this`, otherwise you'd
    // need to use _self to keep a ref. to `this` in
    // the closure...
    //     var _self = this;
    //     setInterval(function(){..._self.setState(...)...}, 1000 )
    // ...or bind the callback to `this`...
    //   setInterval(function(){...}.bind(this), 1000 )
    setInterval( ()=>{
      //console.log('Updating time...');

  	  let date = new Date();
  
      this.setState({
        currentTimeString: Clock.getTimeString(date),
        currentDateString: Clock.getDateString(date),
      });
  
    }, 1000);

  }

  static getTimeString(date){

    const sWho="Clock::getTimeString";

    let hours_24 = date.getHours();
	let hours_12 = 0;
	let am_pm = "";

    if( hours_24 == 0 || hours_24 == 24 ){
      hours_12 = 12;
      am_pm = "AM";
    }
    else if( hours_24 >= 1 && hours_24 <= 12 ){
      hours_12 = hours_24;
      am_pm = "AM";
    }
    else if( hours_24 >= 13 && hours_24 <= 23 ){
      hours_12 = hours_24 - 12;
      am_pm = "PM";
    }

    //console.log(`${sWho}(): lpad(${hours_12},'0',2)=${Clock.lpad(hours_12,'0',2)}...`);
    //return "" + Clock.lpad(hours_12, '0', 2) + ":" + Clock.lpad(date.getMinutes(),'0', 2) + ":" + Clock.lpad(date.getSeconds(),'0', 2) + " " + am_pm;
    return "" + hours_12 + ":" + Clock.lpad(date.getMinutes(),'0', 2) + ":" + Clock.lpad(date.getSeconds(),'0', 2) + " " + am_pm;
  }

  static getDateString(date){
    return "" + (date.getMonth()+1) + "\/" + date.getDate() + "\/" + date.getFullYear();
  }

  static lpad(input, padString, length) {

    const sWho = "Clock::lpad2";

    //console.log(`${sWho}(): input='${input}', padString='${padString}', length=${length}...`);

    var output = "" + input; // Important: coerce to a string...

    while (output.length < length){
      output = padString + output;
    }

    //console.log(`${sWho}(): returning output='${output}'...`);

    return output;
  }

  render(){
    // Uncaught Error: The `style` prop expects a mapping from
    // style properties to values, not a string. For example,
    // style={{marginRight: spacing + 'em'}} when using JSX.
    // This DOM node was rendered by `Clock`.

    //console.log('rendering clock...');

    return <div style={{backgroundColor: 'black', color: 'green', fontFamily: 'courier', fontWeight: 'bold', fontSize: '200%', display: 'inline-block', padding: '10px 12px 10px 10px'}}>{this.state.currentTimeString}<br />{this.state.currentDateString}</div>

  }
}

