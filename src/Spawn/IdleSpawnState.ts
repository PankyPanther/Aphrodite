import { ISpawnState } from "IState/ISpawnState";
import { HarvesterSpawnState } from "./HarvesterSpawnState";
import { HaulerSpawnState } from "./HaulerSpawnState";
import { UpgraderSpawnState } from "./UpgraderSpawnState";
import { Role } from "Enums/Roles";
import { RoomState } from "Room/RoomState";

export class IdleSpawnState implements ISpawnState { 
    spawn: StructureSpawn;
    roomState: RoomState

    update(): ISpawnState {
        const creeps: number = Object.keys(Game.creeps).length

        if (creeps < 6){
            switch (creeps) {
                case 0:
                case 2:
                return new HarvesterSpawnState(this.spawn, this.roomState);
    
                case 1:
                case 3:
                return new HaulerSpawnState(this.spawn);
    
                case 4:
                case 5:
                return new UpgraderSpawnState(this.spawn);
            }
        } else {
            switch(this.leastMadeCreep){
                case Role.Harvester:
                    if(this.roomState.openSource === null) {break}
                    return new HarvesterSpawnState(this.spawn, this.roomState);
                case Role.Hauler:
                    return new HaulerSpawnState(this.spawn);
                case Role.Upgrader:
                    return new UpgraderSpawnState(this.spawn);
            }
        }

        return new IdleSpawnState(this.spawn, this.roomState)
    }

    run(): void {
        console.log("idlespawn not implamented")
    }

    get leastMadeCreep(): keyof typeof Role {
        const roleCounts: Record<keyof typeof Role, number> = {} as Record<keyof typeof Role, number>;

        for (const role in Role) {
            if (Role.hasOwnProperty(role)) {
                const roleAmount = _.filter(Game.creeps, (creep) => creep.memory.role === role).length;
                roleCounts[role as keyof typeof Role] = roleAmount;
            }
        }
    
        let minRole: keyof typeof Role = Object.keys(Role)[0] as keyof typeof Role;
        let minCount = roleCounts[minRole];
    
        for (const role in roleCounts) {
            if (roleCounts[role as keyof typeof Role] < minCount) {
                minCount = roleCounts[role as keyof typeof Role];
                minRole = role as keyof typeof Role;
            }
        }
    
        return minRole;
    }
    
    constructor(spawn: StructureSpawn, roomState: RoomState){
        this.spawn = spawn
        this.roomState = roomState
    }
}