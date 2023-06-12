import React from "react";
import TimerForm from "./core/TimerForm";
class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false
    }


    handleFormOpen = () => {
        this.setState({ isOpen: true })
    }

    handleFormClose = () => {
        this.setState({ isOpen: false })
    }

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);   //timer properties in timnerForm
        this.setState({ isOpen: false })
    }
    render() {
        if (this.props.isOpen) {
            return (
                <>
                    <h1>Timer Form</h1>
                    <TimerForm onFormSubmit={this.handleFormSubmit} onFormClose={this.handleFormClose} />
                </>

            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon' onClick={this.handleFormOpen}>
                        <i className='plus icon' /> plus
                    </button>
                    <p>test</p>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm