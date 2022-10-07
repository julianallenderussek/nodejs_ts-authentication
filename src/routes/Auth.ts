import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export const auth = Router();
const prisma = new PrismaClient();

auth.post("/login", (req, res) => {

});

auth.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const result = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if (result) {
        return res.status(400).json({sucess: false, error:"User already exists"});
    }
    console.log("this works");
    
    const user = await prisma.user.create({
        data: {
            username: username,
            email: email, 
            password: password
        }
    });
    
    const accessToken = jwt.sign({ userId: user.id}, "secret");

    return res.status(200).json({sucess: true, accessToken: accessToken});
});

