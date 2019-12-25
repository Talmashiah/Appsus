
export default class NoteTodos extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        return <div className="note-container" onClick={this.handleClick}>
            <div>{props.note.info.title}</div>
            <ul>
                {props.note.info.todos.map((todo, i) =>
                    <li key={i}>
                        <input type="checkbox"></input> <span className={todo.isDone ? 'todo-done' : ''}>{todo.txt} - {new Date(todo.doneAt).toLocaleString()}</span>
                    </li>)}
            </ul>
        </div>
    }
}