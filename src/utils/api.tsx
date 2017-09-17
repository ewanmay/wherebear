import * as React from "react";
import axios from "axios";

const version: string = "v1.3";

class Api extends React.Component {
  static getMovementData() {
    return new Promise((resolve, reject) => {
      return axios.get("/api/" + version + "/bear_status").then(response => {
        const id = response.data.events[0].event_id;
        return axios
          .get("/api/" + version+ "/bear_status", {
            params: {
              event_id:
                id.toString() +
                "," +
                (id - 1).toString() +
                "," +
                (id - 2).toString() +
                "," +
                (id - 3).toString() +
                "," +
                (id - 4).toString() +
                "," +
                (id - 5).toString() +
                "," +
                (id - 6).toString() +
                "," +
                (id - 7).toString() +
                "," +
                (id - 8).toString()
            }
          })
          .then(secondResponse => {
            return resolve(secondResponse);
          });
      });
    });
  }
  static takePhoto() {
    return new Promise((resolve, reject) => {
      return axios
        .get("/api/" + version + "/bear_status/take_photo/")
        .then(response => {
          resolve(response.data);
        });
    });
  }
  static openDoor() {
    return new Promise((resolve, reject) => {
      return axios
        .get("/api/" + version + "/bear_status/open_door")
        .then(response => {
          resolve(response.data);
        });
    });
  }
}

export default Api;
