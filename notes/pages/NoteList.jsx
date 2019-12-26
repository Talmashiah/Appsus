import noteService from '../services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'
import eventBusService from '../../services/eventBusService.js';

export default class NoteListPage extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('noteChanged', () => {
            this.loadNotes()
        });
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.getNotes().then(notes=>{
            this.setState({notes})
        })
    }

    render() {
        return (
            <section>
                    <div className="notes-container">
                        {this.state.notes.map((note , i)=><NotePreview key={i} note={note}></NotePreview>)}
                    </div>
            </section>
        )
    }
}