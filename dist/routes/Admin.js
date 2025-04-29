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
const Admin = (0, express_1.Router)();
const db_1 = __importDefault(require("../db"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Middleware_1 = __importDefault(require("../Middleware"));
const types_1 = require("../types");
const JWT_SECRET = "made-with-love";
Admin.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AdminSchemsScucess = types_1.AdminSchema.safeParse(req.body);
    if (!AdminSchemsScucess.success) {
        return res.status(403).json({
            error: AdminSchemsScucess.error.format(),
        });
    }
    const { email, password } = req.body;
    try {
        const response = yield db_1.default.admin.findFirst({
            where: {
                email: email,
                password: password,
            },
        });
        if (!response) {
            return res.status(401).json({
                message: "INVALID CREDENTIALS",
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: response.email }, JWT_SECRET, {
            algorithm: "HS256",
        });
        return res.status(200).json({
            msg: "you are signed in ",
            token: token,
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Intenal server eroor ",
        });
    }
}));
Admin.use(Middleware_1.default);
Admin.get("/submissions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.default.forms.findMany({
            include: {
                teamMembers: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return res.status(200).json({
            response,
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }
}));
Admin.get("/submissions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield db_1.default.forms.findFirst({
            where: {
                Teamid: id,
            },
            include: {
                teamMembers: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        res.status(200).json({
            response,
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }
}));
Admin.put("/submissions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, contactEmail, description, teamMembers, status } = req === null || req === void 0 ? void 0 : req.body;
    try {
        const response = yield db_1.default.forms.update({
            where: {
                Teamid: id
            },
            data: {
                name: name,
                contactEmail: contactEmail,
                description: description,
                status: status
            }
        });
        if (!response) {
            return res.status(500).json({
                message: "can not update now "
            });
        }
        return res.status(200).json({
            message: "Updated Successfully"
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }
}));
Admin.delete("/submissions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const resposne = yield db_1.default.forms.delete({
            where: {
                Teamid: id
            }
        });
        console.log(resposne);
        return res.status(200).json({
            message: "Delted "
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }
}));
exports.default = Admin;
