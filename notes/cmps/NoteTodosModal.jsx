
export default class NoteTextModal extends React.Component {

    handleCloseModal = (isClose) => {
        if (isClose) {
            this.props.onCloseModal()
        } else {
            return;
        }
    }

    render() {
        const { props } = this;
        return <div className="modal" >
            <div className="inner-container">
                <span className="close-Modal" onClick={() => this.handleCloseModal(true)}><i className="fas fa-window-close"></i></span>
                <div>{props.note.info.title}</div>
                <ul>
                    {props.note.info.todos.map((todo, i) =>
                        <li key={i}>
                            <input type="checkbox"></input> <span className={todo.isDone ? 'todo-done' : ''}>{todo.txt} - {new Date(todo.doneAt).toLocaleString()}</span>
                        </li>)}
                </ul>
            </div>
        </div>
    }
}
