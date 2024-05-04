package com.hackathon.hackathon.services;

import com.hackathon.hackathon.model.DataType;
import com.hackathon.hackathon.model.Sensor;
import com.hackathon.hackathon.model.SensorData;
import com.hackathon.hackathon.repositories.SensorDataRepository;
import com.hackathon.hackathon.repositories.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SensorService {

    @Autowired
    SensorRepository sensorRepository;

    @Autowired
    SensorDataRepository sensorDataRepository;

    public Sensor getSensor(Long id) {
        return sensorRepository.getReferenceById(id);
    }

    public void saveData(Sensor sensor, Float value, DataType dataType) {
        // Create a new SensorData object with the current timestamp
        SensorData data = new SensorData();
        data.setValue(value);
        data.setTimestamp(LocalDateTime.now());
        data.setDataType(dataType);
        data.setSensor(sensor);

        // Save the SensorData object using the repository
        sensorDataRepository.save(data);
    }
}
