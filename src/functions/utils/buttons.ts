import { ButtonBuilder, InteractionButtonComponentData } from "discord.js"

export const makeButton = (data: Partial<InteractionButtonComponentData>) => {
  return new ButtonBuilder(data)
}