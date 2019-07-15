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
      },
      selectExample: null
    }
    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleSelectExampleChange = this.handleSelectExampleChange.bind(this)
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

  handleSelectExampleChange(event) {
    this.setState({selectExample: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Form with various elements</h1>
        <form>
          <h2>Favourite Programming Language</h2>
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


          <h2>Favourite Color</h2>
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

          <h2>Select Example</h2>
          <select value={this.state.selectExample} onChange={this.handleSelectExampleChange}>
            <option value="">Select one of the following</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
        </form>
      </div>
    )
  }
}