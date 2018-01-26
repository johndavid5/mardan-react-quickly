"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* The DOM node information is obtained via the React DOM’s
* utility function ReactDOM.findDOMNode(), to which you pass the class.
*/
var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    var sWho = "Content::constructor";
    console.log(sWho + "(): I log, therefore I am");
    _this.lecture = "The DOM node information is obtained via the React DOM’s utility function ReactDOM.findDOMNode(), to which you pass the class";
    console.log(sWho + "(): " + _this.lecture + "...");
    return _this;
  }

  _createClass(Content, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("componentWillMount(): ReactDOM.findDOMNode(this)=", ReactDOM.findDOMNode(this));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount(): ReactDOM.findDOMNode(this)=", ReactDOM.findDOMNode(this));
      //console.dir(ReactDOM.findDOMNode(this))
    }
  }, {
    key: "render",
    value: function render() {
      console.log('Render');
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Azat Says: \"",
          this.lecture,
          "\""
        ),
        React.createElement(
          "h2",
          { style: { fontFamily: 'courier', color: 'green' } },
          "Let off some steam, Bennett!"
        )
      );
    }
  }]);

  return Content;
}(React.Component);