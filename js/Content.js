class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programmingLanguage: {
        angular: false,
        react: false,
        polymer: false
      }
    };
    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this);
  }

  handleProgrammingLanguageChange(event) {
    let programmingLanguage = {};
    programmingLanguage[event.target.value] = event.target.checked;
    this.setState({ programmingLanguage: programmingLanguage });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        null,
        "Angular ",
        React.createElement("input", { type: "radio", name: "programming-language",
          value: "angular",
          checked: this.state.programmingLanguage.angular,
          onChange: this.handleProgrammingLanguageChange }),
        React.createElement("br", null),
        "React ",
        React.createElement("input", { type: "radio", name: "programming-language",
          value: "react",
          checked: this.state.programmingLanguage.react,
          onChange: this.handleProgrammingLanguageChange }),
        React.createElement("br", null),
        "Polymer ",
        React.createElement("input", { type: "radio", name: "programming-language",
          value: "polymer",
          checked: this.state.programmingLanguage.polymer,
          onChange: this.handleProgrammingLanguageChange })
      )
    );
  }
}