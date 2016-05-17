
      var App = React.createClass({
        getInitialState: function(){
          return {userInput: ''};
        },
        handleChange: function(event) {
          this.setState({userInput: event.target.value});
        },
        clearAndFocusInput: function(){
          this.setState({userInput: ''}, function(){
            ReactDOM.findDOMNode(this.refs.myInput).focus();
          });
        },
        render: function() {
        return (
        <div>
          <div onClick={this.clearAndFocusInput}>
            Click to Focus and Reset
          </div>
          <input
            ref="myInput"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </div>
        );
      }
    });

    ReactDOM.render(
      <App />,
      document.getElementById('example')
    );
