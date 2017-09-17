export interface movement {
    date: Date;
    status: string;
    image: string;
}

export interface apiMovement {
    bear_status: string;
    event_id: number;
    event_time: string;
    image: string;
}

export interface photoItem {
    camera_id: number;
    id: number;
    image: string;
    path: string;
    time: string;
    type: string;
}

export interface photoCall {
    photos: photoItem[];
}

export interface apiCall {
    data: { 
        events: apiMovement[]
    }
}

