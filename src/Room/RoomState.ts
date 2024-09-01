import { ICreepState } from "../IState/ICreepState"
import { IdleHarvesterState } from "../Harvester/IdleHavesterState"
import { Role } from "Enums/Roles"

export class RoomState {
    room: Room
    harvesterStates: ICreepState[]
    haulerStates: ICreepState[]

    executeLogic() {
        for (let i = 0; i < this.harvesterStates.length; i++){
            this.harvesterStates[i] = this.harvesterStates[i].update()
            this.haulerStates[i] = this.haulerStates[i].update()
        }

        
        for (const state of this.harvesterStates){
            state.run()
        }
        for (const state of this.haulerStates){
            state.run()
        }
    }
    
    get sources(): Source[] {
        return this.room.find(FIND_SOURCES)
    }

    get minerals(): Mineral[] {
        return this.room.find(FIND_MINERALS)
    }

    get spawn(): StructureSpawn[] {
        return this.room.find(FIND_MY_SPAWNS)
    }
    
    constructor(room: Room) {
        this.room = room
        this.harvesterStates = []
        this.haulerStates = []

        for(const creepName in Game.creeps){
            const creep = Game.creeps[creepName]
            if (creep.memory.role === Role.harvester){
                this.harvesterStates.push(new IdleHarvesterState(creep, this))
            }

            if (creep.memory.role === Role.hauler){
                this.haulerStates.push(new IdleHarvesterState(creep, this))
            }
        }
    }
}