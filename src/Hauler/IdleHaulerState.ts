import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";
import { HaulHaulerState } from "./HaulHaulerState";

export class IdleHaulerState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return new HaulHaulerState(this.creep, this.roomState)
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}