import { Responder, ResponderType } from "#base";
import { modals } from '#modals'
import { db } from "#database"
import { menus } from "#menus"

new Responder({
    customId: "auction/item/insert",
    type: ResponderType.Button,
    async run(interaction) {
      await interaction.showModal(modals.auction.item.insert())
    }
});


new Responder({
  customId: 'auction/item/insert/confirm',
  type: ResponderType.Button,
  async run(interaction) {
    const data = interaction.message.embeds[0]
    if(!data.title || !data.description || !data.footer || !data.thumbnail || !data.footer.iconURL) return
    try {
      db.items.insert({
        name: data.title,
        type: data.description?.split('**Tipo: **')[1],
        source_boss: data.footer?.text,
        item_image: data.thumbnail?.url,
        boss_image: data.footer?.iconURL
      })
      await interaction.deferUpdate({fetchReply})
      interaction.editReply(menus.auction.item.successfulInsert())
      setTimeout(() => {
        interaction.deleteReply()
      }, 10000)
    } catch (err) {
      console.log(err)
    }
  }
})