import React from 'react';
import UserInputTextboxAndAddButton from './UserInputTextboxAndAddButton';
import MarkCompleteAndDeleteToDoItemButton from './ToggleCompleteStatusAndDeleteToDoItemButton';
import FilterByToDoItemStatusDropdown from './DropdownBox/FilterByToDoItemStatusDropdown';
import ToggleAllCompleteAndIncompleteAndDeleteButton from './ToggleAllCompleteAndIncompleteAndDeleteButton'
import ToDoListHeader from './ToDoListHeader/ToDoListHeader';
import './ToDoList.css'

export default class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDoList: [],
            toDoItemStatusFilters: 'all',
            toggleAllComplete: true
        }
    }

    addToDoToDisplayList = (toDoItem) => {
        this.setState({
            toDoList: [toDoItem,...this.state.toDoList]
        })
    };

    toggleToDoItemAsCompleted = (id) => {
        this.setState({
            toDoList: this.state.toDoList.map(toDoItem => {
                //finds the one you're supposed to update
                if (toDoItem.id === id) {
                    return {
                        ...toDoItem,
                        complete: !toDoItem.complete
                    };
                } else {
                    return toDoItem;
                }
            })
        });
    };

    deleteToDoItem = (id) => {
        this.setState({
            toDoList: this.state.toDoList.filter(toDoItem => toDoItem.id !== id)
        })
    };

    changeStatusOfToDoItem = (toDoListFilter) => {
        this.setState({
            toDoItemStatusFilters: toDoListFilter
        })
    };

   handleButtonClick = (event) => {
       if(event === 'deleteAll'){
           this.setState({
               toDoList: this.state.toDoList.filter(toDoItem => !toDoItem.complete)
           })
       } else if(event === 'allComplete' || event === 'allIncomplete'){
           this.setState({
               toDoList: this.state.toDoList.map(toDoItem => ({
                   ...toDoItem,
                   complete: this.state.toggleAllComplete
               })),
               toggleAllComplete: !this.state.toggleAllComplete
           })
        }
       };

    render() {
        let filteredToDoList = [];

        if(this.state.toDoItemStatusFilters === 'all' ){
            filteredToDoList = this.state.toDoList;
        } else if (this.state.toDoItemStatusFilters === 'incomplete') {
            filteredToDoList = this.state.toDoList.filter(toDoItem => !toDoItem.complete);
        } else if (this.state.toDoItemStatusFilters === 'completed'){
            filteredToDoList = this.state.toDoList.filter(toDoItem => toDoItem.complete);
        }

        return(
            <div className='to-do-list-wrapper'>
                <div className='to-do-list-header-wrapper'>
                    <ToDoListHeader/>
                </div>
                <div className='dropdown-status-wrapper'>
                    <FilterByToDoItemStatusDropdown
                        changeStatusOfToDoItemForFilter={this.changeStatusOfToDoItem}
                    />
                </div>
                <div className='user-input-wrapper'>
                    <UserInputTextboxAndAddButton onSubmit={this.addToDoToDisplayList}/>
                    {filteredToDoList.map(toDoItem => (
                        <MarkCompleteAndDeleteToDoItemButton
                            key={toDoItem.id}
                            toggleItemAsCompleted={() => this.toggleToDoItemAsCompleted(toDoItem.id)}
                            onDelete={() => this.deleteToDoItem(toDoItem.id)}
                            toDoItem={toDoItem}
                        />
                        ))}
                </div>
                <div className='to-do-left-wrapper'>To Do's Left: {this.state.toDoList.filter(toDoItem => !toDoItem.complete).length}</div>
                <div className='delete-all-toggle-all-button-wrapper'>
                    <div>
                        <ToggleAllCompleteAndIncompleteAndDeleteButton
                            label='Delete All Completed To Do'
                            name='deleteAll'
                            handleClick={this.handleButtonClick}
                        />
                    </div>
                    {this.state.toggleAllComplete ? (<div>
                        <ToggleAllCompleteAndIncompleteAndDeleteButton
                            label='Toggle All Complete'
                            name='allComplete'
                            handleClick={this.handleButtonClick}
                        />
                    </div>): (<div>
                        <ToggleAllCompleteAndIncompleteAndDeleteButton
                            label='Toggle All Incomplete'
                            name='allIncomplete'
                            handleClick={this.handleButtonClick}
                        />
                    </div>)}
                </div>


            </div>
        )
    }
}