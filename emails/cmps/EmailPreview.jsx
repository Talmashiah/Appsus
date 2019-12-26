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
                </div >
            </Link >
                <span className={btnClass} key="9" onClick={this.onDeleteEmail}>🗑️ </span>
                <span className={btnReadClass} key="2" onClick={this.onToggleUnRead}><i class="fas fa-envelope"></i> </span>
            </div>
        </div>
    }
}