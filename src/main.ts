import { RoomState } from "Room/RoomState";

class Root {
    runTick() {
        for (const roomName in Game.rooms){
            const room = Game.rooms[roomName]

            const roomState = new RoomState(room)
            roomState.executeLogic()
        }
    }
}


const root = new Root()
export function loop(): void {
    root.runTick()
}
