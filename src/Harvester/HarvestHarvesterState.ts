import { ICreepState } from "../IState/ICreepState";

export class HarvestHarvesterState implements ICreepState {
    creep: Creep;
    
    update(): ICreepState {
        return this
    }
    run(): void {
        // immpleneted harvest logic
    }
    
    constructor(creep: Creep) {
        this.creep = creep
    }
}