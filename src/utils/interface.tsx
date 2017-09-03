export interface movement {
    date: Date;
    status: string;
    image?: string;
}

export interface apiMovement {
    bear_status: string;
    event_id: number;
    event_time: string;
    image: string;
}

export interface apiCall {
    data: { 
        events: apiMovement[]
    }
}

