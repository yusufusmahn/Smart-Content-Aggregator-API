import mongoose, { Schema, Document } from "mongoose";

export interface IInteraction extends Document {
  user_id: mongoose.Types.ObjectId;
  article_id: mongoose.Types.ObjectId;
  interaction_type: "view" | "like";
}

const InteractionSchema: Schema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    article_id: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    interaction_type: { type: String, enum: ["view", "like"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IInteraction>("Interaction", InteractionSchema);
