'use strict'
import storageService from '../../services/storageService.js'

export default {
    getNotes
}

let gNotes = [
    {
        id:1,
        type: "NoteText",
        isPinned: true,
        info: {
            title: "Im a nice title",
            txt: "yo yo yo this is the text baby!"
        }
    },
    {
        id:2,
        type: "NoteImg",
        info: {
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/37/31/3b/mount-kilimanjaro-view.jpg",
            title: "Nice View from Berlin",
            txt: "That trip was fucking amazing!"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id:3,
        type: "NoteTodos",
        info: {
            title: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null, isDone: false },
                { txt: "Do this", doneAt: 187111111, isDone: true }
            ]
        }
    }
];

function getNotes() {
    if (storageService.load('notes')) {
        gNotes = storageService.load('notes');
    } else {
        storageService.store('notes', gNotes);
    }
    // if (!filterBy) return Promise.resolve([...gEmails]);
    // const filteredEmails = gBooks.filter(book => book.title.includes(filterBy.name)
    //     && book.listPrice.amount < filterBy.price);
    return Promise.resolve([...gNotes]);
}
