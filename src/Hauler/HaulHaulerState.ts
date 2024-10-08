import { RoomState } from "Room/RoomState";
import { ICreepState } from "../IState/ICreepState";

export class HaulHaulerState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        if (this.creep.transfer(this.roomState.spawns[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            this.creep.moveTo(this.roomState.spawns[0])
        }
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}