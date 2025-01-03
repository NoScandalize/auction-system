import { Responder, ResponderType } from "#base";
import { modals } from "#modals";

new Responder({
    customId: "auction/item/load/update",
    type: ResponderType.Button,
    async run(interaction) {
      const id = interaction.message.embeds[0].fields[1].value
      const modal = await modals.auction.item.update(id)
      if(!modal) return
      await interaction.showModal(modal)
    }
});