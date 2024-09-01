import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";

export class HarvestHarvesterState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {

        if (this.creep.harvest(this.roomState.sources[1]) === ERR_NOT_IN_RANGE){
            this.creep.moveTo(this.roomState.sources[1])
        }
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}