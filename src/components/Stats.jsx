import React from 'react';

function Stats(props){

    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <th>Total amount of tasks</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Done</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Left</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>    
    );
}

export default Stats;

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired
}