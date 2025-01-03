import { Colors, EmbedBuilder } from "discord.js"

export type EmbedData = {
  name: string,
  type: string,
  source_boss: string,
  boss_image: string,
  item_image: string
}

export const confirmInsertItemTitleEmbed = () => {
  return new EmbedBuilder({
    description: '### <:questionmark:1313551435862114405> Deseja **inserir** o item a base dados?',
    color: Colors.Default
  })
}

export const confirmInsertItemEmbed = (data: EmbedData) => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      icon_url: 'https://i.imgur.com/bUEtOqi.png'
    },
    title: data.name,
    color: Colors.Default,
    description: `**Tipo: **${data.type}`,
    thumbnail: {
      url: data.item_image
    },
    footer: {
      text: data.source_boss,
      icon_url: data.boss_image,
    },
    timestamp: new Date
  })
}