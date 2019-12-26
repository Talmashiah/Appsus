
export default class NoteImg extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        return <div onClick={this.handleClick}>
                <img className="note-img" src={props.note.info.url} alt="note image"/>
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
    }
}