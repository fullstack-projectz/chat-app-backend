// This file contains that create a jwt token
import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {

    // Here we create a token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // This means 7 days
        httpOnly: true, // prevent the xss attack like scripting attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development',
    });

    return token;
};