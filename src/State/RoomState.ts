import { ICreepState } from "./ICreepState"
import { IdleHarvesterState } from "./IdleHavesterState"

export class RoomState {
    room: Room
    harvesterStates: ICreepState[]

    executeLogic() {
        for (let i = 0; i < this.harvesterStates.length; i++){
            this.harvesterStates[i] = this.harvesterStates[i].update()
        }

        for (const state of this.harvesterStates){
            state.run()
        }
    }   
    
    constructor(room: Room) {
        this.room = room
        this.harvesterStates = []

        for(const creepName in Game.creeps){
            const creep = Game.creeps[creepName]

            this.harvesterStates.push(new IdleHarvesterState(creep))
        }
    }
}