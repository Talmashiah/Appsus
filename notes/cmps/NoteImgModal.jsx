
export default class NoteImgModal extends React.Component {

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
                <img className="note-img" src={props.note.info.url} alt="note image" height="400" />
                <div>{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </div>
    }
}