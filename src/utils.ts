import { GameInfo } from './api/api'

export function calcTotalPrice(games: GameInfo[]): number {
	return +games
		.reduce<number>((total, gameInfo) => (total += gameInfo.price), 0)
		.toFixed(2)
}
