import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";
import { HaulHaulerState } from "./HaulHaulerState";
import { PickUpHaulerState } from "./PickUpHaulerState";

export class IdleHaulerState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        if (this.creep.store[RESOURCE_ENERGY] < this.creep.store.getCapacity(RESOURCE_ENERGY)){
            return new PickUpHaulerState(this.creep, this.roomState)
        } else {
            return new HaulHaulerState(this.creep, this.roomState)
        }
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}