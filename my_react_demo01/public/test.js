'use strict';

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return { userInput: '' };
  },
  handleChange: function handleChange(event) {
    this.setState({ userInput: event.target.value });
  },
  clearAndFocusInput: function clearAndFocusInput() {
    this.setState({ userInput: '' }, function () {
      ReactDOM.findDOMNode(this.refs.myInput).focus();
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { onClick: this.clearAndFocusInput },
        'Click to Focus and Reset'
      ),
      React.createElement('input', {
        ref: 'myInput',
        value: this.state.userInput,
        onChange: this.handleChange
      })
    );
  }
});

ReactDOM.render(React.createElement(App, { date: new Date() }), document.getElementById('example'));