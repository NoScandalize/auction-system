import mongoose, { InferSchemaType, model } from "mongoose";
import { guildSchema } from "./schemas/guild.js";
import { memberSchema } from "./schemas/member.js";
import { log } from "#settings";
import chalk from "chalk";
import { itemsSchema } from "./schemas/items.js";

try {
   await mongoose.connect(process.env.MONGO_URI, { dbName: "auction" });
   log.success(chalk.green("MongoDB connected"));
} catch(err){
   log.error(err);
   process.exit(1);
}

export const db = {
   guilds: model("guild", guildSchema, "guilds"),
   members: model("member", memberSchema, "members"),
   items: model("item", itemsSchema, "items")
};

export type GuildSchema = InferSchemaType<typeof guildSchema>;
export type MemberSchema = InferSchemaType<typeof memberSchema>;
export type ItemsSchema = InferSchemaType<typeof itemsSchema>