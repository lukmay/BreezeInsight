// data service from api
import axios from 'axios';

const API_URL = 'http://localhost:3000';
export const getChartData = async () => {
    try {
        // const response = await axios.get(`${URL}/chart`);
        // return response.data;
        var data = {boxes: []};
        for(var i = 0; i < 10; i++){
            var box = {
                boxId: "Box" + i,
                records: []
            };
            for(var j = 0; j < 50; j++){
                //date every 5 minutes
                var date = new Date();
                date.setMinutes(date.getMinutes() - j *  5);
                var record = {
                    uuid: "uuid" + j,
                    sensorType: "Temperature",
                    timestamp: date,
                    //sinus curve with random noise which is at the start of the curve a min max of 10 and 80 and at the end a min max of 10 and 30
                    value: Math.floor(Math.sin(j / 10) * 5 + Math.random() * 5 + 15 + Math.random() * 5),
                    unit: "Celsius"
                };
                box.records.push(record);
            }
            for(var j = 0; j < 50; j++){
                //date every few minutes but never zero
                var date = new Date();
                //math random to get random number between 1 and 5
                date.setMinutes(date.getMinutes() - j * 5);
                
                var record = {
                    uuid: "uuid" + j,
                    sensorType: "Humidity",
                    timestamp: date,
                    //math random to get random number between 15 and 80 but with a smooth curve
                    value: Math.floor(Math.random() * (80 - 15) + 15),
                    unit: "%"
                };
                box.records.push(record);
            }
            data.boxes.push(box);
        }
        data.boxes.forEach(box => {
            box.records.forEach(element => {
                switch(element.sensorType){
                    case "Temperature":
                        element.temperature = element.value;
                        break;
                    case "Humidity":
                        element.humidity = element.value;
                        break;
                        default:
                        break;
                }
            }
            )});
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getBoxData = async (boxId) => {
    try {
        // const response = await axios.get(`${URL}/box/${boxId}`);
        // return response.data;
        var data = {boxId: boxId, records: []};
        for(var j = 0; j < 50; j++){
            //date every 5 minutes
            var date = new Date();
            date.setMinutes(date.getMinutes() - j *  5);
            var record = {
                uuid: "uuid" + j,
                sensorType: "Temperature",
                timestamp: date,
                //math random to get random number between 15 and 30 but with a smooth curve
                value: Math.floor(Math.random() * (30 - 15) + 15),
                unit: "Celsius"
            };
            data.records.push(record);
        }
        for(var j = 0; j < 50; j++){
            //date every few minutes but never zero
            var date = new Date();
            //math random to get random number between 1 and 5
            date.setMinutes(date.getMinutes() - j * 5);
            
            var record = {
                uuid: "uuid" + j,
                sensorType: "Humidity",
                timestamp: date,
                //math random to get random number between 15 and 80 but with a smooth curve
                value: Math.floor(Math.random() * (80 - 15) + 15),
                unit: "%"
            };
            data.records.push(record);
        }
        data.records.forEach(element => {
            switch(element.sensorType){
                case "Temperature":
                    element.temperature = element.value;
                    break;
                case "Humidity":
                    element.humidity = element.value;
                    break;
                    default:
                    break;
            }
        }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getBoxList = async () => {
    try {
        // const response = await axios.get(`${URL}/box`);
        // return response.data;
        var data = [];
        for(var i = 0; i < 10; i++){
            data.push({boxId: "Box" + i});
        }
        return data;
    } catch (error) {
        console.error(error);
    }
};
