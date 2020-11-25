
import './App.css';
import React,{Component} from 'react'
import ListItem from './ListItem.js'

class MyList extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDoItemArray: this.props.theList,
      newItem: ''
    }
  }
  clearList(e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem(e) {
    e.preventDefault()
    this.setState({
      toDoItemArray: [...this.state.toDoItemArray, this.state.newItem],
      newItem: ""
    })
    
  }

  render() {
    let list = this.state.toDoItemArray.map((each, i) => {
      return <ListItem key={i} doThis={each} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {list}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Clear List</button>
        <form>
          <input type="text"
          placeholder="New Todos here"
          onChange={(e)=>(this.newItemChange(e))}
          value={this.state.newItem}
          />
          <button onClick={(e)=>(this.addItem(e))}>Add ToDo</button>
        </form>
      </div>
    )
  }
}

export default MyList


