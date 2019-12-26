
export default class NoteTextModal extends React.Component {

    handleCloseModal = () => {
        this.props.onCloseModal()
    }

    onTxtChange = (editedTxt, contentType) => {
        this.props.editTxtNote(editedTxt, contentType);
    }


    render() {
        const { props } = this;
        return <div className="modal" onClick={this.handleCloseModal}>
            <div className="inner-container" onClick={(ev) => ev.stopPropagation()}>
                <span className="close-Modal" onClick={this.handleCloseModal}><i className="fas fa-window-close"></i></span>
                <div className="modal-title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'title')}>{props.note.info.title}</div>
                <div suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'txt')}>{props.note.info.txt}</div>
            </div>
        </div>
    }
}