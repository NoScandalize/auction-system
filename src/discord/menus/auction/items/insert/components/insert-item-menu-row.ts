import { makeButton } from "#functions"
import { createRow } from "@magicyan/discord"
import { ButtonStyle } from "discord.js"

export const insertItemRow = () => {
  return createRow(
    makeButton({
      customId: `auction/item/insert`,
      label: 'Inserir',
      emoji: '1313545790030876722',
      style: ButtonStyle.Secondary
    }),
    makeButton({
      customId: `auction/item/cancel`,
      label: 'Cancelar',
      emoji: '1313546622621188198',
      style: ButtonStyle.Secondary
    })
  )
}