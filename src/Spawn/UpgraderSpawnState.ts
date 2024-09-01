import { ISpawnState } from "IState/ISpawnState";
import { Role } from "Enums/Roles";

export class UpgraderSpawnState implements ISpawnState {
    spawn: StructureSpawn;

    update(): ISpawnState {
        return this
    }
    run(): void {
        this.spawn.spawnCreep([WORK, CARRY, MOVE], "Upgrader" + Game.time, {memory: {role: Role.Upgrader}})
    }
    
    constructor(spawn: StructureSpawn){
        this.spawn = spawn
    }
}