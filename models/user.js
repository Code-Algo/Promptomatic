import { Schema, model, models } from 'mongoose';

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required silly goose'],
    },
    username: {
        type: String,
        required: [true, 'Username is required silly billy'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-z0-9._]+(?<![_.])$/, "Username is invalid, it should contain 8-20 alphanumeric letters and be unique funny bunny"]
    },
    image: {
        type: String,
    }
});



const User = models.User || model("User", UserSchema);

export default User;