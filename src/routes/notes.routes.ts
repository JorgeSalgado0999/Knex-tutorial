import {Router} from "express";
import {authMiddleware} from "../helpers/securityFunctions";
import NoteController from "../controllers/note.controller";

const NoteRouter = Router();

NoteRouter.post("/", authMiddleware, NoteController.createNote);
NoteRouter.get("/", authMiddleware, NoteController.getAllNotes);
NoteRouter.get("/:id", authMiddleware, NoteController.getNoteById);
NoteRouter.put("/:id", authMiddleware, NoteController.updateNoteById);
NoteRouter.delete("/:id", authMiddleware, NoteController.deleteNoteById);

export default NoteRouter;
