class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      programmingLanguage: {
        angular: false,
        react: false,
        polymer: false
      },
      favouriteColor: {
      }
    }
    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleProgrammingLanguageChange(event) {
    let programmingLanguage = {}
    programmingLanguage[event.target.value] = event.target.checked
    this.setState({programmingLanguage: programmingLanguage})
  }

  handleColorChange(event) {
    let color = Object.assign(this.state.favouriteColor)
    color[event.target.value] = event.target.checked
    this.setState({favouriteColor: color})
  }

  render() {
    return (
      <div>
        <h1>Form with Radio Buttons</h1>
        <form>
          Angular <input type="radio" name="programming-language"
                 value='angular'
                 checked={this.state.programmingLanguage.angular}
                 onChange={this.handleProgrammingLanguageChange}/>
          <br/>
          React <input type="radio" name="programming-language"
                 value='react'
                 checked={this.state.programmingLanguage.react}
                 onChange={this.handleProgrammingLanguageChange}/>
          <br/>
          Polymer <input type="radio" name="programming-language"
                 value='polymer'
                 checked={this.state.programmingLanguage.polymer}
                 onChange={this.handleProgrammingLanguageChange}/>

        </form>
        <h1>Form with Checkboxes</h1>
        <form>
          Red <input type="checkbox" name="favouriteColor"
                 value="red"
                 checked={this.state.favouriteColor['red']}
                 onChange={this.handleColorChange} />
          <br/>
          Yellow <input type="checkbox" name="favouriteColor"
                 value="yellow"
                 checked={this.state.favouriteColor['yellow']}
                 onChange={this.handleColorChange} />
          <br/>
          Green <input type="checkbox" name="favouriteColor"
                 value="green"
                 checked={this.state.favouriteColor['green']}
                 onChange={this.handleColorChange} />
          <br/>
          Blue <input type="checkbox" name="favouriteColor"
                 value="blue"
                 checked={this.state.favouriteColor['blue']}
                 onChange={this.handleColorChange} />
          <br/>
        </form>
      </div>
    )
  }
}