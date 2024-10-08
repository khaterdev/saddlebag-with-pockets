import { address, UserAgent } from '~/requests/client/config'
import type { WoWServerRegion } from '../WOWScan'

interface WoWBestDealsProps {
  type: string
  region: WoWServerRegion
  discount: number
  salesPerDay: number
  minPrice: number
  itemClass: number
  itemSubClass: number
  expansionNumber: number
}

export interface DealItem {
  [key: string]: any
  connectedRealmId: number
  discount: number
  historicPrice: number
  itemID: number
  itemName: string
  link: string
  minPrice: number
  realmName: string
  salesPerDay: number
}

export interface WoWDealResponse {
  data: Array<DealItem>
}

const WoWBestDeals = async ({
  type,
  region,
  discount,
  salesPerDay,
  minPrice,
  itemClass,
  itemSubClass,
  expansionNumber
}: WoWBestDealsProps) => {
  const floatingSalesPerDay = salesPerDay.toFixed(1)
  return fetch(`${address}/api/wow/bestdeals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': UserAgent
    },
    // send a JSON with salesPerDay as a float
    body: JSON.stringify({
      type,
      region,
      discount,
      minPrice,
      salesPerDay: +floatingSalesPerDay,
      item_class: itemClass,
      item_subclass: itemSubClass,
      expansion_number: expansionNumber
    })
  })
}

export default WoWBestDeals
