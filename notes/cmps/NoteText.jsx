const { Link } = ReactRouterDOM

export default class NoteText extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        console.log(props)
        return <div className="note-container" onClick={this.handleClick}>
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
    }
}