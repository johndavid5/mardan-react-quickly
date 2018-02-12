class TimerWrapper extends React.Component {

	constructor(props){
		super(props);
		this.state = { timeLeft: null, timer: null };
		this.startTimer = this.startTimer.bind(this);
	}

	startTimer(timeLeft){
		// Stop currently running timer, if applicable...
		clearInterval(this.state.timer);

		let timer = setInterval( ()=>{
			var sWho = "setInterval-arrowFunc";
			console.log('2: Inside of setInterval()...');
			var timeLeft = this.state.timeLeft - 1;
			console.log(`${sWho}(): timeLeft = ${timeLeft}...`);
			if( timeLeft == 0 ){
				clearInterval(timer); // Get timer from closure...Marzipan showing off his knowledge of closures...
				//clearInterval(this.state.timer); // Get timer from this.state...
			}
			this.setState( { timeLeft: timeLeft } );
		}, 1000 );

		console.log('1: After setInterval()...');

		return this.setState( { timeLeft: timeLeft, timer: timer });
	}

	render(){
		return (
		<div className="row-fluid">
		  <h2>Timer</h2>
		  <div className="btn-group" role="group">
		    <Button time="5" startTimer={this.startTimer}/>
		    <Button time="10" startTimer={this.startTimer}/>
		    <Button time="15" startTimer={this.startTimer}/>
          </div>
		  <Timer timeLeft={this.state.timeLeft}/>
          <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
		</div>
		);
	}
}/* class TimerWrapper */

class Timer extends React.Component {
	render(){
		if( this.props.timeLeft == 0 ){
			document.getElementById('end-of-time').play();
		}
		if( this.props.timeLeft == null || this.props.timeLeft == 0 ){
			// Empty <div /> for un-started or at 0 timer...
			return <div/>
		}
		return <h1>Time left: {this.props.timeLeft}</h1>
	}/* render() */
}/* class Timer */

class Button extends React.Component {
	startTimer(event){
		return this.props.startTimer(this.props.time);
	}

	render(){
		return <button type="button" className='btn-default btn'
		onClick={this.startTimer.bind(this)}>
		{this.props.time} seconds
		</button>
	}
}

ReactDOM.render(
	<TimerWrapper/>,
	document.getElementById('timer-app')
);

