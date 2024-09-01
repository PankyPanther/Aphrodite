import { ICreepState } from "./ICreepState";

export class HarvestHarvesterState implements ICreepState {
    update(): ICreepState {
        return this
    }
    run(): void {
        // immpleneted harvest logic
    }
    creep: Creep;
    
    constructor(creep: Creep) {
        this.creep = creep
    }
}