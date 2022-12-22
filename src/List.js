import { Component } from "react";
import image from './bag.png';
export class List extends Component {
    state = {
        userWrites: "",
        shopingList: []
    }

    onChangeEvent(e) {
        this.setState({userWrites:e})
    }
    add(input) {
        if (input === '') {
            alert("Please enter an item")
        }
        else {
            let listArray = this.state.shopingList;
            listArray.push(input);
            this.setState({shopingList: listArray, userWrites: ''})
            }
    }
    delete() {
        let listArray = this.state.shopingList;
        listArray = [];
        this.setState({shopingList: listArray})
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed'); 
    }
    Enter(e) {
        e.preventDefault();
    }

render() {
    return(
        <div className="appList">
            <form onSubmit={this.Enter}>
        <div className='box'>
            <input type="text" 
            placeholder='What to buy'
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userWrites}/>
            <button className='btnAdd' onClick={() => this.add(this.state.userWrites)}>Add</button>
        </div>
        <ul>
            {this.state.shopingList.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>
                  <img className='picture' src={image} alt="bags" width="40px"/>
                {item}
            </li>
            ))}
        </ul>
        <div className='box'>
        <button className='delete' onClick={() => this.delete()}>Delete</button>
        </div>
        </form>
        </div>
    )
}
}