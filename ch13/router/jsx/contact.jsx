const React = require('react')

module.exports = function Contact(props) {
  // If you wish to play a prank, and navigate
  // to /about after 1000 milliseconds...
  //setTimeout(()=>{alert("prank: navigate to 'about' after 1000 milliseconds"); props.router.push('about');}, 1000)

  return <div>
    <h3>Contact Us</h3>
    <input type="text" placeholder="your email" className="form-control"></input>
    <textarea type="text" placeholder="your message" className="form-control"></textarea>
    <button className="btn btn-primary">send</button>
  </div>
}

