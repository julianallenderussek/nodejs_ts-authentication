import express from "express";
import consola, { Consola } from "consola";
import cors from "cors";
import * as bodyParser from "body-parser";
import { urlencoded } from "body-parser";
import * as dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";
import { auth as AuthRoute } from "./routes/Auth"

export class Server {
    public app: express.Application;
    public logger: Consola = consola;
    private prisma: PrismaClient = new PrismaClient();

    public constructor() {
        this.app = express();
    }

    public start() {
        this.setConfig();
        this.setRoutes();
        this.setRequestLogger();
        this.app.listen(process.env.PORT, () => {
            this.logger.success(`Server started on port ${process.env.PORT}`)
        })
    }

    private setConfig() {
        this.app.use(bodyParser.json());
        this.app.use(urlencoded({ extended: true}));
        this.app.use(cors());

        dotenv.config();
        
    }

    private setRequestLogger() {
        this.app.use(((req, res , next) => {
            console.log(`${req.method} - ${req.path}`);
        }))
    }

    private setRoutes() {
        this.app.use("/api/v1/auth", AuthRoute);

        this.app.get("/", ((req, res) => {
            return res.json({ success: true, message: "JWT Authentication"})
        }));
    }

    public async sendQuery(): Promise<void> {
        const result = await this.prisma.user.findMany({
            
        });    
    }
}

