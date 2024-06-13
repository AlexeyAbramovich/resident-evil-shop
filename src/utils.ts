import { GameInfo } from './api/api'

export function calcTotalPrice(games: GameInfo[]): number {
  let totalPrice = 0
  games.forEach((gameInfo) => (totalPrice += gameInfo.price))
  return totalPrice.toFixed(2) as unknown as number
}
