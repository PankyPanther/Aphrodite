import { Role } from "Enums/Roles"
import "main"

declare global {
    interface CreepMemory {
        role: Role
    }
}    