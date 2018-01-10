'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    _classCallCheck(this, Users);

    // Make it easy on yourself...initialize
    // state with "blanks" so you won't have
    // to have conditional, error-prone code
    // later...
    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

    _this.state = { users: [] };
    return _this;
  } /* constructor() */

  _createClass(Users, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var url = this.props['data-url'];
      var sWho = "Users::componentDidMount";

      console.log(sWho + '(): doing fetch(' + url + ')...');
      fetch(this.props['data-url']).then(function (response) {
        console.log(sWho + '(): Got response=', response);
        return response.json();
      }).then(function (users) {
        console.log(sWho + '(): Got users = ', users);
        _this2.setState({ users: users });
      }).catch(function (err) {
        alert(sWho + ': Error during fetch: ' + err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          null,
          'List of Users'
        ),
        React.createElement(
          'table',
          { className: 'table-striped table-condensed table table-bordered table-hover' },
          React.createElement(
            'tbody',
            null,
            this.state.users.map(function (user) {
              return React.createElement(
                'tr',
                { key: user.id },
                React.createElement(
                  'td',
                  null,
                  user.first_name,
                  ' ',
                  user.last_name
                ),
                React.createElement(
                  'td',
                  null,
                  user.email
                ),
                React.createElement(
                  'td',
                  null,
                  user.ip_address
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Users;
}(React.Component); /* class Users */