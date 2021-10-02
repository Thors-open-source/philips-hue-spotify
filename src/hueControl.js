import axios from "axios";

var IP_ADDRESS = window.localStorage.getItem("ip");
var HUE_ID = window.localStorage.getItem("id");
var USERNAME = window.localStorage.getItem("username");

const turnLightOnOrOff = async (on, sat, hue) => {
    try {
        return await axios.put(`http://${IP_ADDRESS}/api/${USERNAME}/lights/${HUE_ID}/state`, {
            on: on,
            sat: sat ? sat : 0,
            hue: hue ? hue : 0,
        });
    } catch (err) {
        console.error(err);
    }
};

async function changeBrightness (event, newValue) {
    try {
        return await axios.put(`http://${IP_ADDRESS}/api/${USERNAME}/lights/${HUE_ID}/state`, {
            bri: newValue,
            transitiontime: 1,
        });
    } catch (err) {
        console.error(err);
    }
}

async function changeColor (x, y) {
    try {
        return await axios.put(`http://${IP_ADDRESS}/api/${USERNAME}/lights/${HUE_ID}/state`, {
            xy: [
                x,
                y
            ],
            transitiontime: 1,
        });
    } catch (err) {
        console.error(err);
    }
}

export { turnLightOnOrOff, changeBrightness, changeColor };