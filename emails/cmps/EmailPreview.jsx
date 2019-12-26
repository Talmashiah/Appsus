const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    onDeleteEmail = () => {
        this.props.deleteEmail(this.props.email);
    }

    onToggleRead = () => {
        this.props.toggleRead(this.props.email);
    }
    render() {
        const { props } = this;
        return <div className="preview-container"><Link onClick={this.onToggleRead} to={`/emailApp/email/${props.email.id}`}>
            <div className={props.email.isRead ? 'email-preview-container unbold' : 'email-preview-container bold'}>
                <li className={'email-preview'}>
                    <span className={'from-preview'}> {props.email.from}</span>
                    <span className={'subject-preview'}>
                        <span className={'subject-only'}> {props.email.subject} </span>
                        <span className={'preview-body'}> {props.email.body} </span>
                    </span>
                </li>
            </div >
        </Link >
            <span > <button hidden className={'delete-button-preview'} key="2" onClick={this.onDeleteEmail}>Delete</button></span>
        </div>
    }
}