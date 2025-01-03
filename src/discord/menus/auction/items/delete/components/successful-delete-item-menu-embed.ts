import { Colors, EmbedBuilder, inlineCode } from "discord.js"

export const successfulDeleteItemEmbed = () => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      icon_url: 'https://i.imgur.com/bUEtOqi.png'
    },
    title: 'Deletar itens',
    color: Colors.Default,
    description: `<:checkline:1313549506259718234> ${inlineCode(' O item foi deletado com sucesso!')}`,
    footer: {
      text: 'Success',
      icon_url: 'https://i.imgur.com/n7gOYrE.png',
    },
    timestamp: new Date()
  })
}