import { successfulInsertItemEmbed } from "./components/index.js"

export const successfulInsertItemMenus = () => {
  return {
    ephemeral,
    embeds: [successfulInsertItemEmbed()],
    components: []
  }
}