import React,{Component} from "react"
import './index.css';

class App extends Component {
  constructor(){
    super()
    this.state = {value: ' '};
  } 
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  
  NameList(props) {
    return (
      <div>
        {props.items.map((item, index) => (
          <li key={index} item={item} />
        ))}
      </div>
    );
  }
  
  addUser = () => {
    console.log("addUser");
  }
  render(){
    return (
      <div>
      <input type="text" value={this.state.value} onChange={this.handleChange}/> 
      <button onClick = {this.addUser}> CLICK HERE </button>  
      <h1>{this.state.value}</h1>
      <li>{this.state.value}</li>
      </div>
    );
  }
}



export default App;
