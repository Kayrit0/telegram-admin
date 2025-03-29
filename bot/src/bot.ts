import { Bot } from "grammy";
import axios from "axios";
import "dotenv/config";
const API_URL = `https://apis.roblox.com/cloud/v2/universes/${process.env.ROBLOX_UNIVERSE_ID}:publishMessage`;

const admins = [
    "kmdz3138", // add here admins
];

export const bot = new Bot(process.env.BOT_API_KEY || "");
bot.command("start", (context) => context.reply("Started"));

// add your commands here
bot.command("example", async (context) => {
    context.reply("Used example command");
    await sendUniverseMessage({
        topic: "cmd_example",
        message: "exampleMessage",
    });
});

bot.command("kick", async (context) => {
    if (!admins.includes((await context.getAuthor()).user.username!))
        return context.reply("You are not allowed to use this command");
    await sendUniverseMessage({
        topic: "cmd_kick",
        message: context.message?.text.split(" ")[1],
    });
});

bot.start();
console.log("started bot");

async function sendUniverseMessage(data: IUniverseMessage) {
    try {
        await axios.post(API_URL, data, {
            headers: { "x-api-key": process.env.ROBLOX_API_KEY },
        });
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

interface IUniverseMessage {
    topic: string;
    message: any;
}
