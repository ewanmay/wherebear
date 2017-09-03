import * as React from 'react';
import axios from 'axios';

class Api extends React.Component {
    static getMovementData() {
        return new Promise((resolve, reject) => {
            return axios.get('/api/v1.0/bear_status/').then((response) => {
                const id = response.data.events[0].event_id
                return axios.get('/api/v1.0/bear_status/', {
                    params: {
                        event_id: id.toString() + ',' + (id - 1).toString() + ',' + (id - 2).toString() + ',' + (id - 3).toString() + ',' + (id - 4).toString()
                    }
                }).then((response) => {
                    return resolve(response)
                })
            })
        })
    }
}

export default Api 