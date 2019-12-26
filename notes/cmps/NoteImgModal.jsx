
export default class NoteImgModal extends React.Component {

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
        return <div className="modal" onClick={() => this.handleCloseModal(true)}>
            <div className="inner-container" onClick={(ev) => ev.stopPropagation()}>
                <span className="close-Modal" onClick={() => this.handleCloseModal(true)}><i className="fas fa-window-close"></i></span>
                <img className="note-img" src={props.note.info.url} alt="note image"/>
                <div suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) =>this.onTxtChange(e.target.textContent,'title')}>{props.note.info.title}</div>
                <div suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) =>this.onTxtChange(e.target.textContent,'txt')}>{props.note.info.txt}</div>
            </div>
        </div>
    }
}