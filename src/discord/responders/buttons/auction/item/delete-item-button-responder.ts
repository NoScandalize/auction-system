import { Responder, ResponderType } from "#base"
import { db } from "#database"
import { menus } from "#menus"

new Responder({
  customId: 'auction/item/load/delete',
  type: ResponderType.Button,
  async run(interaction) {
    const data = interaction.message.embeds[0]
    if(!data.title || !data.fields || !data.footer || !data.thumbnail || !data.footer.iconURL) return
    await interaction.deferUpdate({fetchReply})
    interaction.editReply(menus.auction.item.confirmDelete({
      id: data.fields[1].value,
      name: data.title,
      type: data.fields[0].value,
      source_boss: data.footer.text,
      item_image: data.thumbnail.url,
      boss_image: data.footer.iconURL
    }))
  }
})

new Responder({
  customId: 'auction/item/delete/confirm',
  type: ResponderType.Button,
  async run(interaction) {
    try {
      const data = interaction.message.embeds[0]
      if(!data.title || !data.fields || !data.footer || !data.thumbnail || !data.footer.iconURL) return
      const id = data.fields[1].value
      await db.items.delete(id)
      await interaction.deferUpdate({fetchReply})
      interaction.editReply(menus.auction.item.successfulDelete())
      setTimeout(() => {
        interaction.deleteReply()
      }, 10000)
    } catch (err) {
      console.log(err)
    }
  }
})