
export default class NoteTextModal extends React.Component {

    handleCloseModal = (isClose) => {
        if(isClose){
            this.props.onCloseModal()
        } else {
            return;
        }
    }

    render() {
        const { props } = this;
        return <div className="modal" onClick={()=>this.handleCloseModal(true)}>
            <div className="inner-container" onClick={()=>this.handleCloseModal(false)}>
                <div className="modal-title">{props.note.info.title}</div>
                <div>{props.note.info.txt}</div>
            </div>
        </div>
    }
}