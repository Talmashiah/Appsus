
export default class NoteTextModal extends React.Component {

    handleCloseModal = (isClose) => {
        if (isClose) {
            this.props.onCloseModal()
        } else {
            return;
        }
    }

    onTxtChange = (editedTxt,contentType) => {
        this.props.editTxtNote(editedTxt,contentType);
    }


    render() {
        const { props } = this;
        return <div className="modal" >
            <div className="inner-container">
                <span className="close-Modal" onClick={() => this.handleCloseModal(true)}><i className="fas fa-window-close"></i></span>
                <div className="modal-title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) =>this.onTxtChange(e.target.textContent,'title')}>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </div>
    }
}