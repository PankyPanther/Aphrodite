import { HarvestHarvesterState } from "./HarvestHarvesterState";
import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";

export class IdleHarvesterState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        return new HarvestHarvesterState(this.creep)
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}