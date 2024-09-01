export const isMMO = (): boolean => {
    const mmoShardNames = [
        'shard0',
        'shard1',
        'shard2',
        'shard3'
    ]

    return mmoShardNames.includes(Game.shard.name)
}