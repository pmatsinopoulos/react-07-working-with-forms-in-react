class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mr.2'
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    console.debug(this, 'handleTitleChange', 'e', e);
    this.setState({ title: e.target.value });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', { type: 'text', name: 'title', value: this.state.title,
        onChange: this.handleTitleChange })
    );
  }
}