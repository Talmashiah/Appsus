import emailsService from '../services/emailService.js';

export default class EmailReply extends React.Component {



    onGetRandomKeyx = () => {
        let x = emailsService.getRandomId(10000);
        console.log(x);
        return x;
    }

    onGetRandomKeyy = () => {
        let y = emailsService.getRandomId(10000);
        console.log(y);
        return y;
    }

    onGetRandomKeyz = () => {
        let z = emailsService.getRandomId(10000);
        console.log(z);
        return z;
    }

    render() {
        return <span key={this.onGetRandomKeyx()}>
            <h4 key={this.onGetRandomKeyy()}>{this.props.from}</h4>
            <p key={this.onGetRandomKeyz()} className={'reply-container-now'}>{this.props.reply}</p>
        </span>
    }
}