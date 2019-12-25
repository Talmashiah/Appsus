import emailsService from '../services/emailService.js';

export default class EmailPage extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail();
    }


    loadEmail() {
        const { id } = this.props.match.params;
        emailsService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emailApp');
    }

    onDelete = () =>{
        emailsService.deleteEmail(this.state.email);
        this.props.history.push('/emailApp');
    }

    render() {
        if (!this.state.email) return <div>Loading...</div>
        return <div className={'email-page-container'}>
            <h1>{this.state.email.from}</h1>
            <h2>{this.state.email.subject}</h2>
            <p>{this.state.email.body}</p>
            <button onClick={this.goBack}>GO BACK</button>
            <button onClick={this.onDelete}>Delete</button>
        </div>

    }
}