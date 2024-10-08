export const handleUnoccupiedRooms = async () => {
    const unoccupiedrooms = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/unoccupied-rooms`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const unoccupiedroomsdata: Location[] = await unoccupiedrooms.json();
    return unoccupiedroomsdata.map((location: any) => ({
        location: location.location,
        rooms: location.rooms.map((room: any) => ({
            _id: room._id,
            roomName: room.roomName,
            capacity: room.capacity,
            occupants: room.occupants,
        })),
    }));
};

export const handleOccupiedRooms = async () => {
    const occupiedrooms = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/occupied-rooms`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const occupiedroomsdata: Location[] = await occupiedrooms.json();
    return occupiedroomsdata.map((location: any) => ({
        location: location.location,
        rooms: location.rooms.map((room: any) => ({
            _id: room._id,
            roomName: room.roomName,
            capacity: room.capacity,
            occupants: room.occupants,
        })),
    }));
};

export const handlePartiallyOccupiedRooms = async () => {
    const partiallyoccupiedrooms = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/partially-occupied-rooms`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const partiallyoccupiedroomsdata: Location[] = await partiallyoccupiedrooms.json();
    return partiallyoccupiedroomsdata.map((location: any) => ({
        location: location.location,
        rooms: location.rooms.map((room: any) => ({
            _id: room._id,
            roomName: room.roomName,
            capacity: room.capacity,
            occupants: room.occupants,
        })),
    }));
};
