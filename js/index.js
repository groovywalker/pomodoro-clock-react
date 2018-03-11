var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

///////////////////////////////////////////////////////

var Headline = function (_React$Component) {
  _inherits(Headline, _React$Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "h1",
          null,
          "Pomodoro Clock"
        )
      );
    }
  }]);

  return Headline;
}(React.Component);

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this2.state = {
      seconds: 59,
      minutes: 25
    };

    _this2.minusSeconds = _this2.minusSeconds.bind(_this2);
    _this2.minusMinutes = _this2.minusMinutes.bind(_this2);
    return _this2;
  }

  _createClass(Clock, [{
    key: "minusSeconds",
    value: function minusSeconds() {
      if (this.state.seconds > 10) {
        this.setState(function (prevState, props) {
          return {
            seconds: prevState.seconds - 1
          };
        });
      } else if (this.state.seconds <= 10 && this.state.seconds > 0) {
        this.setState(function (prevState, props) {
          return {
            seconds: "0" + (prevState.seconds - 1)
          };
        });
      } else {
        this.setState({ seconds: 59 });
      }
    }
  }, {
    key: "minusMinutes",
    value: function minusMinutes() {
      if (this.state.seconds == 0) {
        this.setState(function (prevState, props) {
          return {
            minutes: prevState.minutes - 1
          };
        });
      } else if (this.state.minutes == 0) {
        alert("Take a 5 minute break!");
        this.setState({ minutes: 25 });
        clearInterval(this.timer);
      }
    }
  }, {
    key: "pomodoroClock",
    value: function pomodoroClock() {
      this.minusSeconds();
      this.minusMinutes();
    }
  }, {
    key: "start",
    value: function start() {
      clearInterval(this.timer);
      this.timer = setInterval(this.pomodoroClock.bind(this), 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
    }
  }, {
    key: "reset",
    value: function reset() {
      clearInterval(this.timer);
      this.setState({ seconds: 59 });
      this.setState({ minutes: 25 });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "div",
          { className: "row", id: "timer" },
          React.createElement("div", { className: "col-sm-4" }),
          React.createElement(
            "div",
            { className: "col-xs-12 col-sm-4" },
            React.createElement(
              "span",
              { id: "min" },
              this.state.minutes
            ),
            ":",
            React.createElement(
              "span",
              { id: "sec" },
              this.state.seconds
            )
          ),
          React.createElement("div", { className: "col-sm-4" })
        ),
        React.createElement(
          "div",
          { className: "row text-center" },
          React.createElement("div", { className: "col-sm" }),
          React.createElement(
            "button",
            { onClick: this.start.bind(this), type: "button", className: "col-sm btn btn-primary", id: "start" },
            "Start"
          ),
          React.createElement(
            "button",
            { onClick: this.stop.bind(this), type: "button", className: "col-sm btn btn-danger", id: "stop" },
            "Stop"
          ),
          React.createElement(
            "button",
            { onClick: this.reset.bind(this), type: "button", className: "col-sm btn btn-info", id: "reset" },
            "Reset"
          ),
          React.createElement("div", { className: "col-sm" })
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Headline, null),
        React.createElement(Clock, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));