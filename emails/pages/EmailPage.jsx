import emailService from '../services/emailService.js';


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
            console.log('Refresh email:',email)
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emailApp')
    }

    render() {
        if (!this.state.email) return <div>Loading...</div>
        return <div>
            HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </div>

    }
}
