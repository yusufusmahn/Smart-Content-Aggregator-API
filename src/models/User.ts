import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  interests?: string[];
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    interests: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
