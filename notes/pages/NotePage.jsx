import booksService from '../../services/booksService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'


export default class NotePage extends React.Component {
    state = {
        note: null
    }

    // componentDidMount() {
    //     this.loadBook();
    // }

    // onAddReview = (review) => {
    //     booksService.addReview(review, this.state.book.id).then(editBook => {
    //         this.setState({ book: editBook })
    //     })
    // }

    // loadBook() {
    //     const { id } = this.props.match.params;
    //     booksService.getBookById(id).then(book => {
    //         console.log('Refresh book:', book)
    //         this.setState({ book })
    //     })
    // }

    // goBack = () => {
    //     this.props.history.push('/booksApp')
    // }

    render() {
        if (!this.state.note) return <div>Loading...</div>
        return <div>
            <NotePreview />
        </div>

    }
}
