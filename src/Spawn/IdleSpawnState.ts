import { ISpawnState } from "IState/ISpawnState";
import { HarvesterSpawnState } from "./HarvesterSpawnState";
import { HaulerSpawnState } from "./HaulerSpawnState";

export class IdleSpawnState implements ISpawnState{
    spawn: StructureSpawn;

    update(): ISpawnState {
        const creeps: number = Object.keys(Game.creeps).length
        if (creeps % 2 === 0 || 0){
            return (new HarvesterSpawnState(this.spawn))
        } else {
            return (new HaulerSpawnState(this.spawn))
        }
    }

    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(spawn: StructureSpawn){
        this.spawn = spawn
    }
}