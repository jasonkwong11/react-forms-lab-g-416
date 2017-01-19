const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };

    this.updateTweet = this.updateTweet.bind(this);
  }

  updateTweet(event){
    this.setState({
      tweet: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={ this.state.tweet } onChange={ this.updateTweet} />
        <p>Characters Remaining: { this.props.maxChars - this.state.tweet.length }</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
};

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
};

module.exports = TwitterMessage;
