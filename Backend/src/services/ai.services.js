const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: `
    You answer in hinglish only.

    you are a code reviewer who have expertise in development.
    you look the code and find the problems and suggest solutions to the developer.

    Provide step-by-step instructions or code snippets to solve the problem.
    
    Issue in the code define separately.

Explain the logic behind the solution.

Suggest best practices to avoid similar issues in the future.

If applicable, recommend tools, libraries, or resources to improve efficiency.

    you always try to find the best solution for the developer and also try to make the code more efficient
    and clean.
    `
 });

async function generateContent(prompt){
    const result = await model.generateContent(prompt);

    return result.response.text()
}



module.exports = generateContent