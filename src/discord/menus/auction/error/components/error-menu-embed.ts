import { Colors, EmbedBuilder } from "discord.js"

type EmbedData = {
  title: string
  error: string
}

export const errorMenuEmbed = (data: EmbedData) => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      icon_url: 'https://i.imgur.com/bUEtOqi.png'
    },
    title: data.title,
    color: Colors.Red,
    description: data.error,
    footer: {
      text: 'Error',
      icon_url: 'https://i.imgur.com/rJkhq2u.png',
    },
    timestamp: new Date()
  })
}