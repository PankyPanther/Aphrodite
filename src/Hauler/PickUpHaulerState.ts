import { RoomState } from "Room/RoomState";
import { ICreepState } from "../IState/ICreepState";

export class PickUpHaulerState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        if (this.creep.pickup(this.roomState.droppedSource[0]) === ERR_NOT_IN_RANGE) {
            this.creep.moveTo(this.roomState.droppedSource[0])
        }
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}