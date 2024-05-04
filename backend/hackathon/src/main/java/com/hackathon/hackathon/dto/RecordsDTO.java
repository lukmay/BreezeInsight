package com.hackathon.hackathon.dto;

import com.hackathon.hackathon.model.DataType;
import com.hackathon.hackathon.model.SensorType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecordsDTO {

    private SensorType sensorType;
    private Long sensorId;
    private LocalDateTime timestamp;
    private float value;
    private DataType unit;



}
