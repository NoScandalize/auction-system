import { confirmInsertItemEmbed, confirmInsertItemRow, confirmInsertItemTitleEmbed, EmbedData } from "./components/index.js"

export const confirmInsertItemMenus = (data: EmbedData) => {
  return {
    ephemeral,
    embeds: [confirmInsertItemEmbed(data), confirmInsertItemTitleEmbed()],
    components: [confirmInsertItemRow()]
  }
}