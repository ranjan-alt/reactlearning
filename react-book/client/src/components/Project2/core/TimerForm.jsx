import React from "react";
class TimerForm extends React.Component {
    state = {
        title: this.props.title || "",
        project: this.props.project || ""
    }

    handleTitleChange = ((e) => {
        this.setState({ title: e.target.value })
    })
    handleProjectChange = ((e) => {
        this.setState({ project: e.target.value })
    })

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.props.title,
            project: this.props.project
        })
    }
    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' value={this.props.title} onChange={this.handleTitleChange} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' value={this.props.project} onChange={this.handleProjectChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button' onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button className='ui basic red button' onClick={this.props.onFormclose}>

                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm