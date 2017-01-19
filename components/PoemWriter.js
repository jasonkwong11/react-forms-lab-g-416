const React = require('react');

function countWords(line){
  return line.split(' ').filter(l => l).length;
}

function isValid(poem){
  const lines = poem.split('\n').filter(l => l);
  const checkLines = lines.length === 3;
  const correctWordCount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  return checkLines && correctWordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false
    };

    this.updatePoem = this.updatePoem.bind(this);
  }

  updatePoem(event){
    const poem = event.target.value;

    if (poem){
      this.setState({
        text: poem,
        isValid: isValid(poem)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows='3' cols='60' value={ this.state.text } onChange={ this.updatePoem }/>
        { !this.state.isValid ? <div id='poem-validation-error' style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}

module.exports = PoemWriter;
