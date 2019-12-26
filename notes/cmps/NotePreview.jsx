import NoteText from '../../notes/cmps/NoteText.jsx'
import NoteImg from '../../notes/cmps/NoteImg.jsx'
import NoteTodos from '../../notes/cmps/NoteTodos.jsx'
import eventBusService from '../../services/eventBusService.js'
import noteService from '../services/noteService.js'

export default class NotePreview extends React.Component {

    onOpenModal = (note) => {
        eventBusService.emit('showNoteModal', note);
    }

    onDeleteNote = () => {
        noteService.deleteNote(this.props.note);
    }

    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note} openModal={this.onOpenModal}></NoteText>
            case 'NoteImg':
                return <NoteImg note={note} openModal={this.onOpenModal}></NoteImg>
            case 'NoteTodos':
                return <NoteTodos note={note} openModal={this.onOpenModal}></NoteTodos>
            default:
                return 
        }
    }

    render() {
        const { props } = this;
        return <div className="note-container">{this.DynamicCmp(props.note)}
        <span onClick={this.onDeleteNote}><i className="fas fa-trash"></i></span>
        </div>
    }
}