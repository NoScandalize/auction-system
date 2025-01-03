import { Responder, ResponderType } from "#base";
import { menus } from "#menus";
import { modals } from "#modals";

new Responder({
    customId: 'auction/item/load',
    type: ResponderType.StringSelect,
    async run(interaction) {
      const id = interaction.values[0]
      if(id === 'nodatafound') {
        interaction.showModal(modals.auction.item.insert())
        return
      }
      try {
        const loadItemMenu = await menus.auction.item.load(id)
        if(!loadItemMenu) return
        await interaction.deferUpdate({ fetchReply })
        interaction.editReply(loadItemMenu)
      } catch (err) {
        console.log(err)
      }
    }
});