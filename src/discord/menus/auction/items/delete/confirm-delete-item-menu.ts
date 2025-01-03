import { confirmDeleteItemEmbed, confirmDeleteItemRow, confirmDeleteItemTitleEmbed, EmbedData } from "./components/index.js"

export const confirmDeleteItemMenus = (data: EmbedData) => {
  return {
    ephemeral,
    embeds: [confirmDeleteItemEmbed(data), confirmDeleteItemTitleEmbed()],
    components: [confirmDeleteItemRow()]
  }
}