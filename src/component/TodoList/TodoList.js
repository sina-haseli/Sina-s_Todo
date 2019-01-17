import React, {Component} from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";



class TodoList extends Component{
    render(){
        let items = this.props.item.map((item,index)=>{
            return(
                <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone}/>
            );
        });
        return(
          <ul className="list-group">{items}</ul>
        );
    }
}


export default TodoList;

