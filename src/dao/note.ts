import db from "../database/database";

export interface Note {
	title: string;
	content: string;
}

class NoteDAO {
	createNote = async (note: Note) => {
		// return await db("notes").insert({title, content}).returning("id");

		//destruture note and get title and content
		const {title, content} = note;
		//insert into notes table the title and content
		return await db("notes").insert({title, content}).returning("id");
	};

	getAllNotes = async () => {
		return await db("notes").select("*");
	};

	getNoteById = async (id: string) => {
		return await db("notes").select("*").where({id});
	};

	updateNoteById = async (id: string, title: string, content: string) => {
		//validate note exist in db
		const note = await db("notes").select("*").where({id});
		if (!note) {
			return null;
		}

		return await db("notes")
			.where({id})
			.update({title, content})
			.returning("*");
	};

	deleteNoteById = async (id: string) => {
		return await db("notes").where({id}).del();
	};
}

export default new NoteDAO();
