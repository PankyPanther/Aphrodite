export interface ISpawnState {
    spawn: StructureSpawn
    update(): ISpawnState
    run(): void
}