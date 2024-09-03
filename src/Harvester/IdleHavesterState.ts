import { HarvestHarvesterState } from "./HarvestHarvesterState";
import { ICreepState } from "../IState/ICreepState";
import { RoomState } from "Room/RoomState";

export class IdleHarvesterState implements ICreepState {
    creep: Creep;
    roomState: RoomState
    
    update(): ICreepState {
        if (!this.creep.memory.harvesterData){
            for (const source of Game.rooms[this.roomState.openSource!.pos.roomName].memory.remoteHarvestSites){
                if (!source.assignedHarvesters.includes(this.creep.id)){
                    source.assignedHarvesters.push(this.creep.id)
                    this.creep.memory.harvesterData = {id: this.roomState.openSource!.id, pos: this.roomState.openSource!.pos}
                }
            }
        }

        return new HarvestHarvesterState(this.creep, this.roomState)
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(creep: Creep, roomState: RoomState) {
        this.creep = creep
        this.roomState = roomState
    }
}