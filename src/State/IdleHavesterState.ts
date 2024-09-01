import { ICreepState } from "./ICreepState";

export class IdleHarvesterState implements ICreepState {
    update(): ICreepState {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    creep: Creep;
    public testProperty: number = 0
    
    constructor(creep: Creep) {
        this.creep = creep
    }
}