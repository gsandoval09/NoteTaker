const util = require("util") 
const fs = require("fs")

const uuid = require("uuidv1")
const { response } = require("express")
const readasync = util.promisify(fs.readFile)
const writeasync = util.promisify(fs.writeFile)

class action {
    read() {
        return readasync("db/db.json","utf8")
    }
    write (data) {
        return writeasync("db/db.json", JSON.stringify(data))
    }
    getNotes() {
        return this.read().then(data => {
            let parsednotes; 
            try{
                parsednotes = [].concat(JSON.parse(data))

                }
            catch(error){
                parsednotes = []
            }
            return parsednotes
        })
    }
    addNote(data) {
        const {
            title,text
        }
        = data
        const newNote= {title,text,id:uuid()}
        return this.getNotes()
        .then(response => {
            return [...response,newNote]
            
        })
        .then(updatedNotes => {
            return this.write(updatedNotes)
        })
        .then(()=> {
            return newNote
        })
    }   
    deleteNote(id){
        return this.getNotes()
        .then(notes => notes.filter(deletedNote => deletedNote.id !==id)).then(filteredNotes => this.write(filteredNotes))
    }

}
    module.exports = new action()