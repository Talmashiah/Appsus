import eventBusService from "../../services/eventBusService.js";
import NoteTextModal from '../../notes/cmps/NoteTextModal.jsx';
import NoteImgModal from '../../notes/cmps/NoteImgModal.jsx';
import NoteTodosModal from '../../notes/cmps/NoteTodosModal.jsx';
import noteService from '../../notes/services/noteService.js';

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

    closeModal = () => {
        this.setState({ display: false })
    }

    editTxtNote = (txt, contentType) => {
        noteService.editNoteTxt(txt, contentType, this.state.note).then(note => {
            this.setState({ note });
        })
    }

    toggleTodo = (todo) => {
        noteService.toggleTodoStatus(this.state.note, todo).then(note => {
            this.setState({ note });
        })
    }

    DynamicCmp = (note) => {
        switch (note.type) {

            case 'NoteText':
                return <NoteTextModal note={note} onCloseModal={this.closeModal} editTxtNote={this.editTxtNote}></NoteTextModal>
            case 'NoteImg':
                return <NoteImgModal note={note} onCloseModal={this.closeModal} editTxtNote={this.editTxtNote}></NoteImgModal>
            case 'NoteTodos':
                return <NoteTodosModal note={note} onCloseModal={this.closeModal} editTxtNote={this.editTxtNote} toggleTodo={this.toggleTodo}></NoteTodosModal>

            default:
                return
        }
    }

    render() {
        if (!this.state.display) return null;
        return <div>{this.DynamicCmp(this.state.note)}</div>
    }
}