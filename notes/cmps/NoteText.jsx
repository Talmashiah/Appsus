const { Link } = ReactRouterDOM

export default class NoteText extends React.Component {

    render() {
        const { props } = this;
        console.log(props)
        return <Link to={`/noteApp/note/${props.note.id}`}>
            <div className="note-container">
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </Link>
    }
}