const { Link } = ReactRouterDOM

export default class NoteTodos extends React.Component {

    handleClick = () => {
        console.log('is checked')
    }
    
    render() {
        const { props } = this;
        return <Link to={`/noteApp/note/${props.note.id}`}>
        <div className="note-container">
            <div>{props.note.info.title}</div>
            <ul>
                {props.note.info.todos.map((todo, i) =>
                    <li key={i}>
                        <input type="checkbox" onChange={this.handleClick}></input> <span className={todo.isDone ? 'todo-done' : ''}>{todo.txt} - {new Date(todo.doneAt).toLocaleString()}</span>
                    </li>)}
            </ul>
        </div>
        </Link>
    }
}