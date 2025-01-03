import { Command } from "#base";
import { ApplicationCommandType } from "discord.js";
import { menus } from "#menus"

new Command({
    name: "[Auction] Gerenciar itens",
    type: ApplicationCommandType.User,
    defaultMemberPermissions: "Administrator",
    async run(interaction){
      await interaction.reply(await menus.auction.item.loadAll())
    }
})