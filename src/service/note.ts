import NoteDAO from "../dao/note";

class NoteService {
	//function create note that recives title and content
	public createNote = (title: string, content: string) => {
		// return {title, content};

		return NoteDAO.createNote({title, content});
	};

	public getAllNotes = () => {
		return NoteDAO.getAllNotes();
	};

	public getNoteById = (id: string) => {
		return NoteDAO.getNoteById(id);
	};

	public updateNoteById = (id: string, title: string, content: string) => {
		return NoteDAO.updateNoteById(id, title, content);
	};

	public deleteNoteById = (id: string) => {
		return NoteDAO.deleteNoteById(id);
	};
}

export default new NoteService();
