class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {textbook: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({textbook: event.target.value})
  }
  render() {
    return <div>
      <label for="joe">Uncontrolled Element (Controversial...may become a React antipattern...):</label>
      <input
        type="text"
        id="joe"
        onChange={this.handleChange}
        placeholder="Eloquent TypeScript: Myth or Reality" />
      <br/>
      <span>{this.state.textbook}</span>
    </div>
  }
}
