class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {accountNumber: '', message: ''}
  }

  /* Filters out non-numeric input... */
  handleChange(event) {
    console.log('Typed: ', event.target.value)
	let valueSanitized = event.target.value.replace(/[^0-9]/ig, '');
	let leMessage = "";
	if( valueSanitized != event.target.value ){
		leMessage = "SHEMP: Sorry, Moe, you entered non-numericals in \"" + event.target.value + "\", and I had to chop 'em out to give us \"" + valueSanitized + "\"...Gee, Moe, I'm sorry, Moe, what mo' can a fellow say, that's all there is, there ain't no mo'...";
	}
    //this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig, '')})
    this.setState({accountNumber: valueSanitized, message: leMessage});
  }

  render() {
    return <div>
      Account Number:
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="123456"
        value={this.state.accountNumber}/>
      <br/>
      <span>{this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber: ''}</span>
	  <br />
      <span style={{color: 'maroon', fontFamily: 'courier'}}>{this.state.message.length > 0 ? this.state.message : ''}</span>
    </div>
  }
}
