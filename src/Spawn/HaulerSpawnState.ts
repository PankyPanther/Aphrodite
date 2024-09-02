import { ISpawnState } from "IState/ISpawnState";
import { Role } from "Enums/Roles";

export class HaulerSpawnState implements ISpawnState {
    spawn: StructureSpawn;

    update(): ISpawnState {
        return this
    }
    run(): void {
        this.spawn.spawnCreep([CARRY, CARRY, MOVE], "Hauler" + Game.time, {memory: {homeRoom: this.spawn.room.name, role: Role.Hauler}})
    }
    
    constructor(spawn: StructureSpawn){
        this.spawn = spawn
    }
}