import { makeButton } from "#functions"
import { createRow } from "@magicyan/discord"
import { ButtonStyle } from "discord.js"

type RowData = {
  buttonId: string,
  buttonTitle: string
}

export const errorMenuRow = (data: RowData) => {
  return createRow(
    makeButton({
      customId: data.buttonId,
      label: data.buttonTitle,
      emoji: '1313555162790494362',
      style: ButtonStyle.Secondary
    })
  )
}