import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";
import { PickUpHaulerState } from "Hauler/PickUpHaulerState";
import { UpgradeControllerUpgradeState } from "./UpgradeControllerUpgradeState";

export class IdleUpgraderState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        if (!this.roomState.controller){
            return new IdleUpgraderState(this.creep, this.roomState)
        }

        if (this.creep.store[RESOURCE_ENERGY] < this.creep.store.getCapacity(RESOURCE_ENERGY)) {
            if (this.creep.store[RESOURCE_ENERGY] > 0) {
                return new UpgradeControllerUpgradeState(this.creep, this.roomState);
            } else {
                return new PickUpHaulerState(this.creep, this.roomState);
            }
        } else {
            return new UpgradeControllerUpgradeState(this.creep, this.roomState);
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