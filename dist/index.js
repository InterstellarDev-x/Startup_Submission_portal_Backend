"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const Admin_1 = __importDefault(require("./routes/Admin"));
const submit_1 = __importDefault(require("./routes/submit"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/admin", Admin_1.default);
app.use("/api/v1/form/", submit_1.default);
app.listen(3000);
