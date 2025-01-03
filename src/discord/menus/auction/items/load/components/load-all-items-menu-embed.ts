import { Colors, EmbedBuilder } from "discord.js"

export const loadAllItemsEmbed = () => {
  return new EmbedBuilder({
    author: {
      name: 'Auction Management',
      iconURL: 'https://i.imgur.com/bUEtOqi.png',
    },
    color: Colors.Default,
    description: `## Gerenciar itens\nBem vindo(a) ao menu de gerenciamento da base de itens do leilão!`,
    fields: [
      {
        name: '<:singleplus:1313545790030876722>  **Inserir**',
        value: 'Utilize para adicionar um novo item a base.',
        inline
      },
      {
        name: '<:alignlist:1313547210235056239>  **Menu de Seleção**',
        value: 'Utilize para gerenciar um item já adicionado a base.',
        inline
      },
      {
        name: '<:xcore:1313546622621188198>  **Cancelar**',
        value: 'Utilize para abortar o gerenciamento de itens',
        inline
      }
    ]
  })
}