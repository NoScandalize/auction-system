import { successfulEditItemEmbed } from "./components/index.js"

export const successfulEditItemMenus = () => {
  return {
    ephemeral,
    embeds: [successfulEditItemEmbed()],
    components: []
  }
}