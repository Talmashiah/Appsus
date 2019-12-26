
export default class NoteTextModal extends React.Component {

    handleCloseModal = () => {
        this.props.onCloseModal()
    }

    onTxtChange = (editedTxt, contentType) => {
        this.props.editTxtNote(editedTxt, contentType);
    }

    onToggleTodo = (todo) => {
        this.props.toggleTodo(todo);
    }

    render() {
        const { props } = this;
        return <div className="modal" onClick={this.handleCloseModal}>
            <div className="inner-container" onClick={(ev) => ev.stopPropagation()}>
                <span className="close-Modal" onClick={this.handleCloseModal}><i className="fas fa-window-close"></i></span>
                <div className="modal-title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'title')}>{props.note.info.title}</div>
                <ul>
                    {props.note.info.todos.map((todo, i) =>
                        <li key={i}>
                            <input type="checkbox" onClick={() => this.onToggleTodo(todo)}></input>
                            <span className={todo.isDone ? 'todo-done' : ''} suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'txt')}>
                                {todo.txt} 
                            </span>
                            <span> - {new Date(todo.doneAt).toLocaleString()}</span> 
                        </li>)}
                </ul>
            </div>
        </div>
    }
}
