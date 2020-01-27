import React from "react";
import {MainFilterWrapper, DownArrow, FilterBodyButton, FilterBodyWrapper, FilterMainButton} from "./FilterByToDoitemStatusDropdownStyle";

export default class FilterByToDoItemStatusDropdown extends React.Component {
    state = {
        showMenu: false,
    };


    toggleMenuOpenAndClose = (event) => {
        event.preventDefault();

        this.setState({
            showMenu: !this.state.showMenu
        })
    }


    render(){
        return(
          <MainFilterWrapper>
              <div className='filter-main-button-wrapper'>
                  <FilterMainButton onClick={this.toggleMenuOpenAndClose}>Filter Menu <DownArrow>⌄</DownArrow></FilterMainButton>
              </div>
        {this.state.showMenu
            ? (
                <FilterBodyWrapper>
                    <div>
                        <FilterBodyButton onClick={()=> this.props.changeStatusOfToDoItemForFilter('all')}>All</FilterBodyButton>
                    </div>
                    <div>
                        <FilterBodyButton onClick={() => this.props.changeStatusOfToDoItemForFilter('incomplete')}>Incomplete</FilterBodyButton>
                    </div>
                    <div>
                        <FilterBodyButton onClick={() => this.props.changeStatusOfToDoItemForFilter('completed')}>Completed</FilterBodyButton>
                    </div>
                </FilterBodyWrapper>
        ): (null)}
          </MainFilterWrapper>
        )
    }
}