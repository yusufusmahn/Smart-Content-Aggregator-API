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


export const getArticles = async (req: Request, res: Response) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const articles = await Article.find()
      .skip(Number(offset))
      .limit(Number(limit));
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch article" });
  }
};



