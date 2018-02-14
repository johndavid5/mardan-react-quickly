const React = require('react');
const ReactDOM = require('react-dom');

class Content extends React.Component {

  constructor(props) {    
    super(props)
    this.fauxSubmit = this.fauxSubmit.bind(this)
    this.prompt = 'Please enter your email to win $1,000,000.'
  }

  fauxSubmit(event) {
	let sWho = "fauxSubmit";
    let emailAddress = this.refs.emailAddress
    let comments = this.refs.comments
    console.log(`${sWho}(): this.refs.emailAddress.value = '${ReactDOM.findDOMNode(emailAddress).value}'...`)
    console.log(`${sWho}(): this.refs.comments.value = '${ReactDOM.findDOMNode(comments).value}'...`)
  }

  render() {
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Commentaires: <textarea ref="comments" className="form-control"  placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.fauxSubmit}>Submit</a>
        </div>
      </div>
    )
  }/* render() */

}/* class Content */

module.exports = Content;
