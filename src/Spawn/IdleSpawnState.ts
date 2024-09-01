import { ISpawnState } from "IState/ISpawnState";

export class IdleSpawnState implements ISpawnState{
    spawn: StructureSpawn;

    update(): ISpawnState {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(spawn: StructureSpawn){
        this.spawn = spawn
    }
}