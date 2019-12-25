import NoteText from '../../notes/cmps/NoteText.jsx'
import NoteImg from '../../notes/cmps/NoteImg.jsx'
import NoteTodos from '../../notes/cmps/NoteTodos.jsx'

export default class NotePreview extends React.Component {

    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note}></NoteText>
            case 'NoteImg':
                return <NoteImg note={note}></NoteImg>
            case 'NoteTodos':
                return <NoteTodos note={note}></NoteTodos>
            default:
                return //...some default error view
        }
    }

    render() {
        const { props } = this;
        return <div>{this.DynamicCmp(props.note)}</div>
    }
}