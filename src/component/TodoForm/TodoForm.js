import React ,{Component} from 'react';


class TodoForm extends Component{
    state={
      itemName: 'sina'
    };
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log('>>>>', this.refs, this.state.itemName)
        const key = this.state.itemName
        this.refs[key] && this.refs[key].focus();
    }
    onSubmit(event){
        event.preventDefault();
        let newItemValue=this.refs.itemName.value;
        if (newItemValue){
            this.props.addItem({newItemValue});
            this.refs.form.rest();
        }
    }
    render(){
        return(
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref={this.state.itemName} className="form-control" placeholder="add a new todo ..."/>
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }

}

export default TodoForm;