import { Request, Response } from "express";
import Article from "../models/Article";




export const createArticle = async (req: Request, res: Response) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: "Failed to create article" });
  }
};


