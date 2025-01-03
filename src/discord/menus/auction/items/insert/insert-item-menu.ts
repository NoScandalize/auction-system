import { insertItemEmbed, insertItemRow } from "./components/index.js"

export const insertItemMenus = () => {
  return {
    ephemeral,
    embeds: [insertItemEmbed()],
    components: [insertItemRow()]
  }
}