import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";

export class HarvestHarvesterState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        const source = Game.getObjectById(this.creep.memory.harvesterData!.id)!
        if (this.creep.harvest(source) === ERR_NOT_IN_RANGE){
            this.creep.moveTo(source)
        }
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}