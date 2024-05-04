package com.hackathon.hackathon.api;

import com.hackathon.hackathon.dto.SensorDataDTO;
import com.hackathon.hackathon.model.Sensor;
import com.hackathon.hackathon.services.BoxService;
import com.hackathon.hackathon.services.SensorService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/data")
@RequiredArgsConstructor
@Tag(name="Sensor Data")
public class DataController {

    @Autowired
    private BoxService boxService;
    @Autowired
    private SensorService sensorService;


    @GetMapping("/all")
    public ResponseEntity<Object> getAllData() {
        String string = "xxx";

        return ResponseEntity.status(HttpStatus.OK).body(string);
    }

    @GetMapping("/box_id")
    public ResponseEntity<Object> getAllBoxIds() {

        List<Long> boxIds = boxService.getBoxIDsList();

        return ResponseEntity.status(HttpStatus.OK).body(boxIds);
    }

    @GetMapping("/all/{box_id}")
    public ResponseEntity<Object> getDataByBoxId(@PathVariable("box_id") Long boxId) {

        String string = "xxx";

        return ResponseEntity.status(HttpStatus.OK).body(string);
    }

    @PostMapping("/single/{sensor_id}")
    public ResponseEntity<Object> saveSensorData(@PathVariable("sensor_id") Long sensorId,
                                                 @RequestBody SensorDataDTO sensorDataDTO) {
        try {
            Sensor sensor = sensorService.getSensor(sensorId);
            if (sensor == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sensor not found");
            }

            sensorService.saveData(sensor, sensorDataDTO.getValue(), sensorDataDTO.getDataType());
            return ResponseEntity.status(HttpStatus.CREATED).body("Data saved successfully");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving data");
        }
    }



}
