import noteService from '../services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'
import eventBusService from '../../services/eventBusService.js';

export default class NoteListPage extends React.Component {
    state = {
        notes: [],
        info: '',
        type: '',
        inputType: 'txt'
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('noteChanged', () => {
            this.loadNotes()
        });
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.getNotes().then(notes => {
            this.setState({ notes })
        })
    }

    onAddNote = () => {
        noteService.addNote(this.state.info, this.state.type).then(notes => {
            this.setState({ notes, info: '' })
        })
    }

    inputChange = (ev) => {
        ev.persist()
        let fieldName = ev.target.name;
        let value = ev.target.value;
        this.setState({ type: fieldName, info: value })
    }

    DynamicInput = (inputType) => {
        switch (inputType) {

            case 'txt':
                return <input type="text" value={this.state.info} onChange={this.inputChange} placeholder="Take a note..." name="NoteText" />
            case 'img':
                return <input type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add image URL..." name="NoteImg" />
            case 'todos':
                return <input type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add todo title" name="NoteTodos" />

            default:
                return
        }
    }

    onChangeInputType = (type) => {
        this.setState({ inputType: type, info: '' })
    }


    render() {
        return (
            <section>
                <div className="add-notes-container">
                <div>{this.DynamicInput(this.state.inputType)}</div>
                    <button onClick={() => this.onChangeInputType('txt')} className="add-image-btn"><i className="fas fa-font"></i></button>
                    <button onClick={() => this.onChangeInputType('img')} className="add-image-btn"><i className="fas fa-image"></i></button>
                    <button onClick={() => this.onChangeInputType('todos')} className="add-image-btn"><i className="fas fa-list"></i></button>
                    <button className="add-note-btn" onClick={this.onAddNote}>Add</button>
                </div>
                <div className="notes-container">
                    {this.state.notes.map((note, i) => <NotePreview key={i} note={note}></NotePreview>)}
                </div>
            </section>
        )
    }
}