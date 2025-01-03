import { Responder, ResponderType } from "#base";
import { menus } from "#menus";
import { modals } from "#modals";

new Responder({
    customId: "auction/item/cancel",
    type: ResponderType.Button,
    async run(interaction) {
      await interaction.deferUpdate({fetchReply})
      interaction.deleteReply()
    },
});

new Responder({
  customId: 'auction/item/insert/cancel',
  type: ResponderType.Button,
  async run(interaction) {
    const data = interaction.message.embeds[0]
    await interaction.showModal(modals.auction.item.insert({
      name: data.title || '',
      type: data.description?.split('**Tipo: **')[1] || '',
      source_boss: data.footer?.text || '',
      item_image: data.thumbnail?.url || '',
      boss_image: data.footer?.iconURL || ''
    }))
    interaction.editReply(await menus.auction.item.loadAll())
  }
})

new Responder({
  customId: 'auction/item/load/cancel',
  type: ResponderType.Button,
  async run(interaction) {
    await interaction.deferUpdate({fetchReply})
    interaction.editReply(await menus.auction.item.loadAll())
  }
})

new Responder({
  customId: 'auction/item/delete/cancel',
  type: ResponderType.Button,
  async run(interaction) {
    await interaction.deferUpdate({fetchReply})
    interaction.editReply(await menus.auction.item.loadAll())
  }
})