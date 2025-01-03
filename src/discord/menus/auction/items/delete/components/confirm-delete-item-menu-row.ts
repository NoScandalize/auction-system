import { makeButton } from "#functions"
import { createRow } from "@magicyan/discord"
import { ButtonStyle } from "discord.js"

export const confirmDeleteItemRow = () => {
  return createRow(
    makeButton({
      customId: `auction/item/delete/confirm`,
      label: 'Confirmar',
      emoji: '1313549506259718234',
      style: ButtonStyle.Secondary
    }),
    makeButton({
      customId: `auction/item/delete/cancel`,
      label: 'Cancelar',
      emoji: '1313546622621188198',
      style: ButtonStyle.Secondary
    })
  )
}