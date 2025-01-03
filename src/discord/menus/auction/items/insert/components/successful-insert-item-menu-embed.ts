import { Colors, EmbedBuilder, inlineCode } from "discord.js"

export const successfulInsertItemEmbed = () => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      icon_url: 'https://i.imgur.com/bUEtOqi.png'
    },
    title: 'Inserir itens',
    color: Colors.Default,
    description: `<:checkline:1313549506259718234> ${inlineCode(' O item foi inserido com sucesso!')}`,
    footer: {
      text: 'Success',
      icon_url: 'https://i.imgur.com/n7gOYrE.png',
    },
    timestamp: new Date()
  })
}