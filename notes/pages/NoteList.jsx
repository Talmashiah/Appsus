import noteService from '../services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'

export default class NoteListPage extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    componentDidUpdate(){
        console.log('update')
    }

    loadNotes = () => {
        noteService.getNotes().then(notes=>{
            this.setState({notes})
        })
    }

    render() {
        console.log(this.state.notes)
        return (
            <section>
                    <div className="notes-container">
                        {this.state.notes.map((note , i)=><NotePreview key={i} note={note}></NotePreview>)}
                    </div>
            </section>
        )
    }
}