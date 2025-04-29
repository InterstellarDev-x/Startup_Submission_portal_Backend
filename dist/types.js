"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = exports.FormSchmema = void 0;
const zod_1 = require("zod");
exports.FormSchmema = zod_1.z.object({
    name: zod_1.z.string({ message: "Enter you name" }),
    contactEmail: zod_1.z.string().email({ message: "Provide a vaild email id" }),
    description: zod_1.z.string({ message: "Please provide the description of startup" }),
    teamMembers: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string({ message: "Team member is required " }) }))
});
exports.AdminSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "enter the email id " }),
    password: zod_1.z.string().min(8, { message: "Must be atleaset 8 charachter" })
});
