export type CoinsItemsType = {
    uuid: string
    symbol: string
    name: string
    iconUrl: string
    rank: number
    price: string
    coinrankingUrl: string
    color: string
}

export type CoinsType = {
    coins: CoinsItemsType[]
}

export type CoinDetailType = {
    uuid: string
    symbol: string
    name: string
    description: string
    color: string
    iconUrl: string
    websiteUrl: string
    price: string
}

export type CoinType = {
    coin: CoinDetailType
}