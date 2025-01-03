import { Responder, ResponderType } from "#base";
import { menus } from "#menus";
import { brBuilder } from "@magicyan/discord";
import { inlineCode } from "discord.js";
import { z } from 'zod'

const fieldsSchema = z.object({
  name: z.string().min(5, 'O nome do item precisa ter no mínimo 5 caracteres.'),
  type: z.string().min(3, 'O tipo do item precisa ter no mínimo 3 caracteres.'),
  source_boss: z.string().min(3, 'O nome do boss precisa ter no mínimo 3 caracteres.'),
  item_image: z.string().url('A imagem do item precisa ser uma URL.'),
  boss_image: z.string().url('A imagem do boss precisa ser uma URL.')
})

new Responder({
  customId: "auction/item/insert/modal",
  cache: "cached",
  type: ResponderType.Modal,
  async run(interaction) {
    await interaction.deferUpdate({
      fetchReply
    })
    const prefix = 'auction/item/insert/modal/input/'
    const fields = interaction.fields.fields.reduce((prev, curr) => ({...prev, [curr.customId.split(prefix)[1]]: curr.value }), {})
    const parseResult = fieldsSchema.safeParse(fields)
    if (!parseResult.success) {
      interaction.editReply(menus.auction.error({
        buttonTitle: 'Tentar novamente',
        buttonId: 'auction/item/insert/try',
        title: '❌ Parâmetros incorretos!',
        error: brBuilder(parseResult.error.errors.map(err => `<:xcore:1313546622621188198> ${inlineCode(err.message)}`))
      }))
      return;
    }
    const { name, boss_image, item_image, source_boss, type } = parseResult.data
    interaction.editReply(menus.auction.item.confirmInsert({
      name,
      type,
      source_boss,
      item_image,
      boss_image
    }))
  }
});