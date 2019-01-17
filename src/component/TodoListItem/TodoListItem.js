import React, {Component} from 'react';

//hello
class TodoListItem extends Component{
    constructor(props){
        super(props);
        this.onClickClose=this.onClickClose.bind(this);
        this.onClickDone=this.onClickDone.bind(this);
    }
    onClickClose(){
        let index=parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone(){
        let index=parseInt(this.props.index);
        this.props.markTodoDone(index);
    }
    render(){
        let todoClass = this.props.item.done ? "done":"undone";
        return(
            <li className="list-group-item">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
                    {this.props.item.value}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
