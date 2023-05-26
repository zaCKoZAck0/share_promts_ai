import { Schema, model, Document, models } from 'mongoose';

interface User {
  email: string;
  username: string;
  image?: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!']
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: String
});

const User = models.User || model<User & Document>("User", UserSchema);

export default User;
