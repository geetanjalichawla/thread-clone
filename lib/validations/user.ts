import * as z from 'zod';

export const UserValidator = z.object({
    profile_photo : z.string().url().nonempty(),
    name : z.string().min(3, {message: 'minimum 3 charaters'}).max(30),
    username : z.string().min(3, {message: 'minimum 3 charaters'}).max(30),
    bio : z.string().min(3, {message: 'minimum 3 charaters'}).max(1000),
})