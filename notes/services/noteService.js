'use strict'
import utils from '../../services/utils.js'
import storageService from '../../services/storageService.js'
import eventBusService from "../../services/eventBusService.js";
import TxtNote from '../../notes/services/TxtNote.js'
import ImgNote from '../../notes/services/ImgNote.js'

export default {
    getNotes,
    getNoteById,
    editNoteTxt,
    deleteNote,
    toggleTodoStatus,
    editTodoTxt,
    addNote,
    addNoteTodo
}

let gNotes = [
    {
        id: utils.getRandomID(),
        type: "NoteText",
        isPinned: true,
        info: {
            title: "You can Do this!",
            txt: "Do not be afraid of fear"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteImg",
        info: {
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/37/31/3b/mount-kilimanjaro-view.jpg",
            title: "Nice view from the kilimanjaro",
            txt: "That trip was fucking amazing!"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteTodos",
        info: {
            title: "To do list",
            todos: [
                { id: 1, txt: "Go buy some milk", doneAt: Date.now() - 1000000, isDone: false },
                { id: 2, txt: "Visit your grandma", doneAt: Date.now() - 1000, isDone: true }
            ]
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteText",
        isPinned: true,
        info: {
            title: "Credit card pin code:",
            txt: "5792"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteImg",
        info: {
            url: "https://qph.fs.quoracdn.net/main-qimg-225232d1b893f689e7d24ad42e6a0de7",
            title: "Itachi and Sasuke",
            txt: "Best moment in naruto"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteTodos",
        info: {
            title: "Things to do each day:",
            todos: [
                { id: 1, txt: "Eat a Banana", doneAt: Date.now() - 10000489, isDone: false },
                { id: 2, txt: "Go to the gym", doneAt: 1577281200513, isDone: true }
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
    return Promise.resolve([...gNotes]);
}

function addNote(info, type) {
    let note;
    switch (type) {
        case 'NoteText':
            note = new TxtNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        case 'NoteImg':
            note = new ImgNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        default:
            break; 
    }

}

function addNoteTodo (note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.info.todos.push({ id: utils.getRandomID(), txt: "", doneAt: Date.now(), isDone: false })
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function deleteNote(note) {
    gNotes = gNotes.filter((currNote) => currNote.id !== note.id);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
}

function editNoteTxt(txt, contentType, note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.info[contentType] = txt;
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function toggleTodoStatus(note, todo) {
    let copyNote = JSON.parse(JSON.stringify(note));
    todo.isDone = !todo.isDone;
    copyNote.info.todos = copyNote.info.todos.map(currTodo => currTodo.id === todo.id ? todo : currTodo);
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function editTodoTxt(txt, todo, note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    todo.txt = txt;
    todo.doneAt = Date.now()
    copyNote.info.todos = copyNote.info.todos.map(currTodo => currTodo.id === todo.id ? todo : currTodo);
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function getNoteById(NoteId) {
    if (storageService.load('notes')) gNotes = storageService.load('notes');
    const note = gNotes.find(note => note.id == NoteId);
    return Promise.resolve(note);
}