
import React from "react";
import EditableTimer from "./EditableTimer";
class EditableTimerList extends React.Component {
    render() {


        const timers = this.props.timers.map((timer) => (
            <EditableTimer key={timer.id} id={timer.id} title={timer.title} project={timer.project} elapsed={timer.elapsed} runningSince={timer.runningSince} editFormOpen={timer.editFormOpen} />
        ))
        return (
            <>
                <h1> Editabel Timer List</h1>

                <div id='timers'>
                    {timers}
                </div>
            </>
        );
    }
}

export default EditableTimerList
