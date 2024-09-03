import { Role } from "Enums/Roles";
import { ISpawnState } from "IState/ISpawnState";
import { RoomState } from "Room/RoomState";

export class HarvesterSpawnState implements ISpawnState {
    spawn: StructureSpawn;
    roomState: RoomState

    update(): ISpawnState {
        return this
    }
    run(): void {
        this.spawn.spawnCreep([WORK, MOVE], "Harvester" + Game.time, {memory: {homeRoom: this.spawn.room.name, role: Role.Harvester}})
    }
    
    constructor(spawn: StructureSpawn, roomState: RoomState){
        this.spawn = spawn
        this.roomState = roomState
    }
}