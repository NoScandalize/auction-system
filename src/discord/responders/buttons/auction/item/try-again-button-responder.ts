import { Responder, ResponderType } from "#base";
import { menus } from "#menus";
import { modals } from "#modals";

new Responder({
    customId: "auction/item/insert/try",
    type: ResponderType.Button,
    async run(interaction) {
      await interaction.showModal(modals.auction.item.insert())
      interaction.editReply(await menus.auction.item.loadAll())
    }
});

new Responder({
  customId: "auction/item/update/try",
  type: ResponderType.Button,
  async run(interaction) {
    await interaction.showModal(modals.auction.item.insert())
    interaction.editReply(await menus.auction.item.loadAll())
  }
});