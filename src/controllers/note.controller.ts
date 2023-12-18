import express, {Request, Response} from "express";
import NoteService from "../service/note";

class NoteController {
	//create a new note
	public createNote = async (req: Request, res: Response) => {
		// res.send("Hello from Notes");
		try {
			//validate title and content
			if (!req.body.title || !req.body.content) {
				return res.status(400).json({error: "Missing title or content"});
			}

			const id = await NoteService.createNote(req.body.title, req.body.content);
			res.status(201).json(id);
		} catch (err) {
			console.log(err);
			res.status(400).json({error: "Something went wrong"});
		}
	};

	getAllNotes = async (req: Request, res: Response) => {
		try {
			const notes = await NoteService.getAllNotes();
			res.status(200).json(notes);
		} catch {
			res.status(400).json({error: "Something went wrong"});
		}
	};

	getNoteById = async (req: Request, res: Response) => {
		try {
			// assign id to a variable and convert to string
			const id = String(req.params.id);
			console.log("id: ", id);

			//validate id in params
			if (!id) {
				return res.status(400).json({error: "Missing id in query params"});
			}

			const note = await NoteService.getNoteById(id);
			res.status(200).json(note);
		} catch {
			res.status(400).json({error: "Something went wrong"});
		}
	};

	updateNoteById = async (req: Request, res: Response) => {
		try {
			//validate id
			if (!req.params.id) {
				return res.status(400).json({error: "Missing id in query params"});
			}

			//validate title and content
			if (!req.body.title || !req.body.content) {
				return res.status(400).json({error: "Missing title or content"});
			}

			const note = await NoteService.updateNoteById(
				req.params.id,
				req.body.title,
				req.body.content
			);
			res.status(200).json(note);
		} catch {
			res.status(400).json({error: "Something went wrong"});
		}
	};

	deleteNoteById = async (req: Request, res: Response) => {
		try {
			//validate id
			if (!req.params.id) {
				return res.status(400).json({error: "Missing id in query params"});
			}

			const note = await NoteService.deleteNoteById(req.params.id);
			res
				.status(200)
				.json(`Note with id ${req.params.id} was deleted successfully`);
		} catch {
			res.status(400).json({error: "Something went wrong"});
		}
	};
}

export default new NoteController();
