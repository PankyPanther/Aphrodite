import { Role } from "Enums/Roles"
import "main"

declare global {
    interface CreepMemory {
        role: Role
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