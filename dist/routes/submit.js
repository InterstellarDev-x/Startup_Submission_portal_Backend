"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Submit = (0, express_1.Router)();
const db_1 = __importDefault(require("../db"));
const types_1 = require("../types");
Submit.post("/submit-idea", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formsuccess = types_1.FormSchmema.safeParse(req.body);
    if (!formsuccess.success) {
        return res.status(403).json({
            error: formsuccess.error.format()
        });
    }
    const { name, contactEmail, description, teamMembers } = req.body;
    try {
        const response = yield db_1.default.forms.create({
            data: {
                name,
                contactEmail,
                description,
                teamMembers: {
                    create: teamMembers.map((member) => ({
                        name: member.name,
                    })),
                },
            }
        });
        return res.json({
            message: "Submitted Succesfully"
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Intenal server eroor ",
        });
    }
}));
exports.default = Submit;
