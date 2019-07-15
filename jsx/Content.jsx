class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      programmingLanguage: {
        angular: false,
        react: false,
        polymer: false
      }
    }
    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this)
  }

  handleProgrammingLanguageChange(event) {
    let programmingLanguage = {}
    programmingLanguage[event.target.value] = event.target.checked
    this.setState({programmingLanguage: programmingLanguage})
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}