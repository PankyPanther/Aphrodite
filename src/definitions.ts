import { Role } from "Enums/Roles"
import "main"

declare global {
    interface CreepMemory {
        role: Role
        homeRoom: string
        harvesterData?: HarvesterData
    }

    interface RoomMemory {
      remoteHarvestSites: {
        sourceId: Id<Source>,
        sourcePos: RoomPosition,
        numPositions: number,
        assignedHarvesters: Id<Creep>[]
      }[]
    }

    interface RawMemory {
        [key: string]: any
    }

    namespace NodeJS {
        interface Global {
          log: any
          Memory?: Memory
        }
      }
}

export interface HarvesterData {id: Id<Source>, pos: RoomPosition}