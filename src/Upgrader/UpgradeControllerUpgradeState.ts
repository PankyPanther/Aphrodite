import { RoomState } from "Room/RoomState";
import { ICreepState } from "../IState/ICreepState";

export class UpgradeControllerUpgradeState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        if (this.creep.upgradeController(this.roomState.controller!) === ERR_NOT_IN_RANGE) {
            this.creep.moveTo(this.roomState.controller!)
        }
        this.creep.moveTo(this.roomState.controller!)
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}