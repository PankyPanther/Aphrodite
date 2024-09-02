import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";

export class HarvestHarvesterState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        this.creep.say('harvesting')
        if (this.creep.harvest(Game.getObjectById(this.creep.memory.harvesterData!.id)!) === ERR_NOT_IN_RANGE){
            this.creep.moveTo(this.creep.memory.harvesterData!.pos)
        }
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}