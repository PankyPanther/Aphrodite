import { Role } from "Enums/Roles";
import { ISpawnState } from "IState/ISpawnState";

export class HarvesterSpawnState implements ISpawnState {
    spawn: StructureSpawn;

    update(): ISpawnState {
        return this
    }
    run(): void {
        this.spawn.spawnCreep([WORK, MOVE], "Harvester" + Game.time, {memory: {role: Role.harvester}})
    }
    
    constructor(spawn: StructureSpawn){
        this.spawn = spawn
    }
}