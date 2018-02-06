const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class DoneLink extends React.Component {
  render() {
    return React.createElement(
      "a",
      this.props,
      React.createElement("span", { className: "glyphicons glyphicons-check" }),
      this.props.children
    );
  }
}

class Content extends React.Component {

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(EnhancedButton, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLink, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLogo, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "h2",
        { id: "header" },
        React.createElement(
          "a",
          { target: "_blank", id: "anchor", href: this.props.iframeSrc },
          this.props.iframeSrc
        )
      ),
      React.createElement("iframe", { id: "frame", src: this.props.iframeSrc, width: "600", height: "500" }),
      React.createElement("hr", null),
      React.createElement(
        DoneLink,
        { href: "/common/images/corny-cassanovas-0107.png" },
        "Click here:"
      )
    );
  }
}

Content.defaultProps = { iframeSrc: 'http://react.rocks' };

Content.propTypes = {
  iframeSrc: PropTypes.string.isRequired
};