import noteService from '../services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'
import eventBusService from '../../services/eventBusService.js';

export default class NoteListPage extends React.Component {
    state = {
        notes: [], 
        info:'',
        type:'',
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
        noteService.addNote(this.state.info,this.state.type).then(notes=> {
            this.setState({ notes })
        })
    }

    inputChange = (ev) => {
        ev.persist()
        let fieldName = ev.target.name;
        let value = ev.target.value;
        this.setState({ type:fieldName,info:value})
    }


    render() {
        return (
            <section>
                <div className="notes-container">
                    {/* <input type="text" value={this.state.info} onChange={this.inputChange} placeholder="Take a note..." name="NoteText" /> */}
                    <input type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add image URL..." name="NoteImg" />
                    {/* <button className="add-image-btn"><i className="fas fa-image"></i></button> */}
                    <button className="add-note-btn" onClick={this.onAddNote}>Add</button>
                    {this.state.notes.map((note, i) => <NotePreview key={i} note={note}></NotePreview>)}
                </div>
            </section>
        )
    }
}