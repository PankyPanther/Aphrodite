export function getOpenSpaces(roomPosition: RoomPosition, room: Room, radius: number, gridSize: number = 50): number {
    const terrain = new Room.Terrain(room.name);
    let openPositions: number = 0

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            if (dx === 0 && dy === 0) continue;

            const newX = roomPosition.x + dx;
            const newY = roomPosition.y + dy;

            if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && terrain.get(newX, newY) !== TERRAIN_MASK_WALL) {
                const structures = room.lookForAt(LOOK_STRUCTURES, newX, newY);
                const hasNonRoadStructure = structures.some(structure => structure.structureType !== STRUCTURE_ROAD);
                if (!hasNonRoadStructure) {
                    openPositions++
                }
            }
        }
    }

    return openPositions;
}