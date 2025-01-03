import { Schema } from "mongoose";
import { t } from "../utils.js";

export const itemsSchema = new Schema(
    {
        name: t.string,
        type: t.string,
        source_boss: t.string,
        item_image: t.string,
        boss_image: t.string
    },
    {
        statics: {
            async insert(data: InsertData) {
                const query = {
                    name: data.name,
                    type: data.type,
                    source_boss: data.source_boss,
                    item_image: data.item_image,
                    boss_image: data.boss_image
                }
                await this.create(query);
            },
            async loadAll() {
                return await this.find()
            },
            async load(id: string) {
                return await this.findOne({ _id: id })
            },
            async update(id: string, data: Partial<InsertData>) {
                return await this.updateOne({ _id: id }, data)
            },
            async delete(id: string) {
                return await this.deleteOne({ _id: id })
            }
        }
    }
);

type InsertData = {
    name: string,
    type: string,
    source_boss: string,
    item_image: string,
    boss_image: string
}