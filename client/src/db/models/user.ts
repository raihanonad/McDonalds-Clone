import { User } from '@/types';
import { db } from '../config/mongo';
import z from 'zod';

interface Login {
    email: string;
    password: string;
}

interface newUser {
    name: string;
    username: string; // validation: reuired, unique
    email: string; // validation: reuired, unique, email format
    password: string; // validation: required, length min 5
}

const UserValidation = z.object({
    username: z.string({required_error: "Username cant be empty"}),
    email: z.string({required_error: "Email cant be empty"}).email(),
    password: z.string({required_error: "Password cant be empty"}).min(5)
});

export default class UserModel {
    static userCollection() {
        return db.collection<User>('users')
    }

    static async getUserByEmail(email: string) {
        return (await this.userCollection().findOne({ email }))
    }
}
