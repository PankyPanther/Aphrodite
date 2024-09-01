export interface ICreepState {
    creep: Creep
    update(): ICreepState
    run(): void
}