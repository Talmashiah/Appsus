
export default class NoteImg extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        return <div className="note-container" onClick={this.handleClick}>
                <img src={props.note.info.url} alt="note image" height="175" />
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
    }
}