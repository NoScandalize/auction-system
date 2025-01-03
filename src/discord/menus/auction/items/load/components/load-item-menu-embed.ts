import { Colors, EmbedBuilder } from "discord.js"

export type EmbedData = {
  id: string
  name: string,
  type: string,
  source_boss: string,
  boss_image: string,
  item_image: string
}

export const loadItemEmbed = (data: EmbedData) => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      icon_url: 'https://i.imgur.com/bUEtOqi.png'
    },
    title: data.name,
    color: Colors.Default,
    fields: [
      {
        name: 'Tipo',
        value: data.type,
        inline
      },
      {
        name: 'ID',
        value: data.id,
        inline
      }
    ],
    thumbnail: {
      url: data.item_image
    },
    footer: {
      text: data.source_boss,
      icon_url: data.boss_image,
    },
    timestamp: new Date()
  })
}