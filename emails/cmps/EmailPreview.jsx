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
        return <div className={props.email.isRead ? 'email-preview-container unbold' : 'email-preview-container bold'}>
            <Link onClick={this.onToggleRead} to={`/emailApp/email/${props.email.id}`}>
                <li className={'email-preview'}>
                    <span className={'from-preview'}> {props.email.from}</span>
                    <span className={'subject-preview'}>
                        <span> {props.email.subject} </span>
                        <p> {props.email.body} </p>
                    </span>
                </li>
            </Link>
            <span>  <button key="2" onClick={this.onDeleteEmail}>Delete</button></span>
        </div>
    }
}