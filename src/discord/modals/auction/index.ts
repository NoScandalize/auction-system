import { insertItemAuctionModal } from './insert-items-modal.js'
import { editItemAuctionModal } from './edit-items-modal.js'

export const auctionModals = {
  item: {
    insert: insertItemAuctionModal,
    update: editItemAuctionModal
  }
}