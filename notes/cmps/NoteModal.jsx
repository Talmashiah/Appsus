import eventBusService from "../../services/eventBusService.js";

export default class NoteModal extends React.Component {
    eventKiller = null;

    state = { display: false, note: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('showNoteModal', (note) => {
            this.setState({ display: true, note: note })
        });
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <h1>NoteText</h1>
                // <NoteTextModal note={note}></NoteTextModal>
            case 'NoteImg':
                return <h1>NoteImg</h1>
                // <NoteImgModal note={note}></NoteImgModal>
            case 'NoteTodos':
                return <h1>NoteTodos</h1>
                // <NoteTodosModal note={note}></NoteTodosModal>
            default:
                return //...some default error view
        }
    }

    render() {
        if (!this.state.display) return null;
        return <div>{this.DynamicCmp(this.state.note)}</div>
    }
}





//     render() {
//         let note = this.state.note;
//         if (!this.state.display) return null;
//         return <div className="note-modal-container"  >
//             <div>{note.info.title}</div>
//             <ul>
//                 {note.info.todos.map((todo, i) =>
//                     <li key={i}>
//                         <input type="checkbox" onChange={this.handleClick}></input> <span className={todo.isDone ? 'todo-done' : ''}>{todo.txt} - {new Date(todo.doneAt).toLocaleString()}</span>
//                     </li>)}
//             </ul>
//         </div >
//     }
// } 