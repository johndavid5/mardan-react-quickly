class Content extends React.Component {

  constructor(){
	super();
    
  }

  onClick(){
	alert("Let off some steam, Bennett!");
  }

  render() {
    let number = 1
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button title={number}/>
        <Button />
        <Button handler={this.onClick().bind(this);} buttonLabel="Send Email" email="not-a-valid-email"/>
        <Button handler={return function(){ alert("Let off some steam, Bennett!"); } } buttonLabel="Click Me!" email="hi@azat.co"/>
      </div>
    )
  }
}
