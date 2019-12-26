
export default class NoteTextModal extends React.Component {

    handleCloseModal = (isClose) => {
        if (isClose) {
            this.props.onCloseModal()
        } else {
            return;
        }
    }

    render() {
        const { props } = this;
        return <div className="modal" >
            <div className="inner-container">
                <span className="close-Modal" onClick={() => this.handleCloseModal(true)}><i className="fas fa-window-close"></i></span>
                <div className="modal-title">{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </div>
    }
}