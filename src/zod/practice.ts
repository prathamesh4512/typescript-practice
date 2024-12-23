import {z} from 'zod';

const User = z.object({
    name: z.string(),
    age : z.number(),
    email : z.string().optional()
})

User.parse({
    name:"s",
    age:20,
})

