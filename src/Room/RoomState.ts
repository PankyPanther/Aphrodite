import { ICreepState } from "../IState/ICreepState"
import { IdleHarvesterState } from "../Harvester/IdleHavesterState"
import { Role } from "Enums/Roles"
import { IdleSpawnState } from "Spawn/IdleSpawnState"
import { ISpawnState } from "IState/ISpawnState"
import { IdleHaulerState } from "Hauler/IdleHaulerState"
import { IdleUpgraderState } from "Upgrader/IdleUpgraderState"


export class RoomState {
    room: Room
    spawningStates: ISpawnState[]
    harvesterStates: ICreepState[]
    haulerStates: ICreepState[]
    upgraderStates: ICreepState[]

    public executeLogic(): void {
        this.creepLogic()
        this.spawnLogic()
    }

    // MARK: -CreepLogic
    private creepLogic(): void {
        //---------------------------------Harvesting--------------------------------------
        for (let i = 0; i < this.harvesterStates.length; i++){
            this.harvesterStates[i] = this.harvesterStates[i].update()
        }
        for (const state of this.harvesterStates){
            state.run()
        }

        //---------------------------------Hauling----------------------------------------
        for (let i = 0; i < this.haulerStates.length; i++){
            this.haulerStates[i] = this.haulerStates[i].update()
        }
        for (const state of this.haulerStates){
            state.run()
        }

        //---------------------------------Upgrading---------------------------------------
        for (let i = 0; i < this.upgraderStates.length; i++){
            this.upgraderStates[i] = this.upgraderStates[i].update()
        }
        for (const state of this.upgraderStates){
            state.run()
        }
    }

    // MARK: -Spawning
    private spawnLogic(): void {
        //---------------------------------Spawning---------------------------------------
        for (let i = 0; i < this.spawningStates.length; i++){
            this.spawningStates[i] = this.spawningStates[i].update()
        }
        for (const state of this.spawningStates){
            state.run()
        }
    }
    
    get sources(): Source[] {
        return this.room.find(FIND_SOURCES)
    }

    get minerals(): Mineral[] {
        return this.room.find(FIND_MINERALS)
    }

    get spawns(): StructureSpawn[] {
        return this.room.find(FIND_MY_SPAWNS)
    }

    get droppedSource(): Resource<ResourceConstant>[] {
        return this.room.find(FIND_DROPPED_RESOURCES)
    }

    get controller(): StructureController | undefined {
        if (this.room.controller){
            return this.room.controller
        }

        return undefined
    }
    
    constructor(room: Room) {
        this.room = room
        this.spawningStates = []
        this.harvesterStates = []
        this.haulerStates = []
        this.upgraderStates = []

        for(const creepName in Game.creeps){
            const creep = Game.creeps[creepName]
            if (creep.memory.role === Role.Harvester){
                this.harvesterStates.push(new IdleHarvesterState(creep, this))
            }

            if (creep.memory.role === Role.Hauler){
                this.haulerStates.push(new IdleHaulerState(creep, this))
            }

            if (creep.memory.role === Role.Upgrader){
                this.haulerStates.push(new IdleUpgraderState(creep, this))
            }
        }

        for (const spawn of this.spawns){
            this.spawningStates.push(new IdleSpawnState(spawn))
        }
    }
}