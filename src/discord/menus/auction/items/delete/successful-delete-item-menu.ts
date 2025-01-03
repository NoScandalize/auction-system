import { successfulDeleteItemEmbed } from "./components/index.js"

export const successfulDeleteItemMenus = () => {
  return {
    ephemeral,
    embeds: [successfulDeleteItemEmbed()],
    components: []
  }
}