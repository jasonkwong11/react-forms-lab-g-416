const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.submitForm = this.submitForm.bind(this);
    this.formUpdate = this.formUpdate.bind(this);

    this.state = {
      password: '',
      username: ''
    };
  }

  submitForm(event){
    event.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      return;
    } else {
      this.props.onSubmit({
        username,
        password
      });
    }
  }

  formUpdate(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={ this.state.username } onChange={ this.formUpdate.bind(this, 'username') } />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={ this.state.password } onChange={ this.formUpdate.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
