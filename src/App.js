import React, { Component } from 'react';
import TodoHeader from "./component/TodoHeader/TodoHeader";
import TodoList from "./component/TodoList/TodoList";
import TodoForm from "./component/TodoForm/TodoForm";
import TodoListItem from "./component/TodoListItem/TodoListItem";

const todoItems=[];
todoItems.push({index:1,value:"learn react",done:false});
todoItems.push({index:2,value:"Go Shopping",done:true});
todoItems.push({index:3,value:"buy flowers",done:true});

class App extends Component {
  constructor(props){
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state={todoItems: todoItems};
  }
    addItem(todoItem) {
        todoItems.unshift({
            index: todoItems.length+1,
            value: todoItem.newItemValue,
            done: false
        });
        this.setState({todoItems: todoItems});
    }
  removeItem (itemIndex){
      todoItems.splice(itemIndex,1);
      this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex){
      let todo=todoItems[itemIndex];
      todoItems.splice(itemIndex,1);
      todo.done=!todo.done;
      todo.done ? todoItems.push(todo): todoItems.unshift(todo);
      this.setState({todoItems:todoItems})
  }
  render() {
    return (
      <div className="App">
          <TodoHeader/>
          <TodoList item={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
          <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
