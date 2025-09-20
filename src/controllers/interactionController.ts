import { Request, Response } from "express";
import Interaction from "../models/Interaction";

export const createInteraction = async (req: Request, res: Response) => {
  try {
    const interaction = await Interaction.create(req.body);
    res.status(201).json(interaction);
  } catch (err) {
    res.status(400).json({ error: "Failed to create interaction" });
  }
};
