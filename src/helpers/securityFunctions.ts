import { Request, Response } from "express";

export const authMiddleware = async (req: Request, res: Response, next: any) => {
    try {
        
        next();
    } catch (ex) {
        handleError(res, ex);
    }
}

export const handleError = (res: Response, ex: any) => {
    console.log(ex);
    const data = {
        status: false,
        data: String(ex)
    }
    res.status(500).send(data);
}