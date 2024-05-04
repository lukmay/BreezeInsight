package com.hackathon.hackathon.dto;

import com.hackathon.hackathon.model.DataType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorDataDTO {
    private Float value;
    private DataType dataType;
}
