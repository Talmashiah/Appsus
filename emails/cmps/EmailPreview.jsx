const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    onDeleteEmail = () => {
        this.props.deleteEmail(this.props.email);
    }

    onToggleRead = () => {
        this.props.toggleRead(this.props.email);
    }

    onToggleUnRead = () => {
        this.props.toggleUnRead(this.props.email);
    }

    onFormatDate = () => {
        this.props.formatDate(this.props.email.sentAt);
    }
    componentDidMount = () =>{
        this.onFormatDate();
    }

    render() {
        const btnClass = this.state.isHovered ? "delete-button-preview" : "delete-button-preview hidden";
        const btnReadClass = this.state.isHovered ? "mark-read-button" : "mark-read-button hidden";
        const { props } = this;
        return <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <div className="preview-container"><Link onClick={this.onToggleRead} to={`/emailApp/email/${props.email.id}`}>
                <div className={props.email.isRead ? 'email-preview-container unbold' : 'email-preview-container bold'}>
                    <li className={'email-preview'}>
                        <span className={'from-preview'}> {props.email.from}</span>
                        <span className={'subject-preview'}>
                            <span className={'subject-only'}> {props.email.subject} </span>
                            <span className={'preview-body'}> {props.email.body} </span>
                        </span>
                    </li>
                    <span className={'preview-date'}>{'HERE IS THE PROBLEM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}</span>
                </div >
            </Link >
                <span className={btnClass} key="9" data-toggle={'tooltip'} title={'Delete'} onClick={this.onDeleteEmail}><i className={'fas fa-trash'}></i> </span>
                <span className={btnReadClass} key="2" onClick={this.onToggleUnRead} data-toggle={'tooltip'} title={props.email.isRead ? 'Mark as unread' : 'Mark as read'}>
                    <i className={props.email.isRead ? 'fas fa-envelope' : 'fas fa-envelope-open'}></i></span>
            </div>
        </div>
    }
}

