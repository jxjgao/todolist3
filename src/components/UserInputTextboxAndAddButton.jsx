import React from "react";
import shortID from "shortid";

export default class UserInputTextboxAndAddButton extends React.Component {
    state = {
        userInputText: ""
    }

    setTextBasedOnInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleAddButtonAndEnterKeyWhenUserSubmits = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortID.generate(),
            userInputText: this.state.userInputText,
            complete: false
        });
        this.setState({
            userInputText:""
        });
        //submit the form
    };

    render() {
        return(
            <form onSubmit={this.handleAddButtonAndEnterKeyWhenUserSubmits}>
                <input
                    name="userInputText"
                    value={this.state.userInputText}
                    onChange={this.setTextBasedOnInput}
                    placeholder="todo..."
                    />
                    <button onClick={this.handleAddButtonAndEnterKeyWhenUserSubmits}>Add To Do</button>
            </form>)
    }

}