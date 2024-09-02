import { RoomState } from "Room/RoomState";
import { ICreepState } from "../IState/ICreepState";

export class ScoutingScoutState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return this
    }
    run(): void {
        
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}