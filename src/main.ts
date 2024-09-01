import { RoomState } from "Room/RoomState";
import { memHack } from "Utility/MemHack";
import { isMMO } from "Utility/Utility";

class Root {
    runTick() {
        for (const roomName in Game.rooms){
            const room = Game.rooms[roomName]

            const roomState = new RoomState(room)
            roomState.executeLogic()
        }
    }

    generatePixels(): void {
        if (!isMMO()) return
        if (Game.cpu.getUsed() > Game.cpu.limit) return
        if (Game.cpu.bucket != 10000) return
        Game.cpu.generatePixel()
    }
}


const root = new Root()
export function loop(): void {
    memHack.modifyMemory()
    root.runTick()
    root.generatePixels()
}
