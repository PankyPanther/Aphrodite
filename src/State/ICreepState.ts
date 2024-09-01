export interface ICreepState {
    //update functiuon
    update(): ICreepState
    run(): void
    creep: Creep
}