class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programmingLanguage: {
        angular: false,
        react: false,
        polymer: false
      },
      favouriteColor: {}
    };
    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleProgrammingLanguageChange(event) {
    let programmingLanguage = {};
    programmingLanguage[event.target.value] = event.target.checked;
    this.setState({ programmingLanguage: programmingLanguage });
  }

  handleColorChange(event) {
    let color = Object.assign(this.state.favouriteColor);
    color[event.target.value] = event.target.checked;
    this.setState({ favouriteColor: color });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Form with Radio Buttons"
      ),
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
      ),
      React.createElement(
        "h1",
        null,
        "Form with Checkboxes"
      ),
      React.createElement(
        "form",
        null,
        "Red ",
        React.createElement("input", { type: "checkbox", name: "favouriteColor",
          value: "red",
          checked: this.state.favouriteColor['red'],
          onChange: this.handleColorChange }),
        React.createElement("br", null),
        "Yellow ",
        React.createElement("input", { type: "checkbox", name: "favouriteColor",
          value: "yellow",
          checked: this.state.favouriteColor['yellow'],
          onChange: this.handleColorChange }),
        React.createElement("br", null),
        "Green ",
        React.createElement("input", { type: "checkbox", name: "favouriteColor",
          value: "green",
          checked: this.state.favouriteColor['green'],
          onChange: this.handleColorChange }),
        React.createElement("br", null),
        "Blue ",
        React.createElement("input", { type: "checkbox", name: "favouriteColor",
          value: "blue",
          checked: this.state.favouriteColor['blue'],
          onChange: this.handleColorChange }),
        React.createElement("br", null)
      )
    );
  }
}