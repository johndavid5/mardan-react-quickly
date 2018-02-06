const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class DoneLink extends React.Component {
	render(){
		return <a {...this.props}>
			<span className="glyphicons glyphicons-check"></span>
			{this.props.children}
			</a>
	}
}

class Content extends React.Component {

  render() {
    return (
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
		<h2 id="header"><a target="_blank" id="anchor" href={this.props.iframeSrc}>{this.props.iframeSrc}</a></h2>
        <iframe id="frame" src={this.props.iframeSrc} width="600" height="500"/>
		<hr />
		<DoneLink href="/common/images/corny-cassanovas-0107.png">
		Click here:
		</DoneLink>
      </div>
    )
  }
}

Content.defaultProps = {iframeSrc: 'http://react.rocks'}

Content.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
}
