import { makeButton } from "#functions"
import { createRow } from "@magicyan/discord"
import { ButtonStyle } from "discord.js"

export const loadItemRow = () => {
  return createRow(
    makeButton({
      customId: `auction/item/load/update`,
      emoji: '1312127455049547847',
      label: 'Editar',
      style: ButtonStyle.Secondary
    }),
    makeButton({
      customId: `auction/item/load/cancel`,
      emoji: '1313564346298667089',
      style: ButtonStyle.Secondary
    }),
    makeButton({
      customId: `auction/item/load/delete`,
      label: 'Deletar',
      emoji: '1313563891577651270',
      style: ButtonStyle.Secondary
    })
  )
}