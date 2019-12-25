const { Link } = ReactRouterDOM

export default class NoteImg extends React.Component {

    render() {
        const { props } = this;
        return <Link to={`/noteApp/note/${props.note.id}`}>
            <div className="note-container">
                <img src={props.note.info.url} alt="note image" height="175" />
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </Link>
    }
}