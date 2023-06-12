import React from "react";
import TimerForm from "./core/TimerForm";
import Timer from "./core/Timer";
class EditableTimer extends React.Component {
    state = { editFormOpen: false }
    render() {
        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}

                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}

                />
            );
        }
    }
}

export default EditableTimer