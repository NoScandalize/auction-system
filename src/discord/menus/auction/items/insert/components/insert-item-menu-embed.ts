import { Colors, EmbedBuilder } from "discord.js"

export const insertItemEmbed = () => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      iconURL: 'https://i.imgur.com/bUEtOqi.png',
    },
    title: 'Inserir itens',
    color: Colors.Orange,
    description: 'Para inserir um item a base, basta apenas informar os seguintes dados: \n - Nome do item \n - Tipo do item \n - Boss de origem do item \n - URL da imagem do item  \n - URL da imagem do boss',
    timestamp: new Date()
  })
}