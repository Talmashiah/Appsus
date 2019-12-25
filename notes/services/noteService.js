'use strict'
import storageService from '../../services/storageService.js'

export default {
    getNotes
}

let gNotes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
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
