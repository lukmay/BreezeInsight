package com.hackathon.hackathon.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@lombok.Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "sensor_data")
public class SensorData {

    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long dataID;

    private float value;
    private LocalDateTime timestamp;
    private DataType dataType;

    @ManyToOne
    @JoinColumn(name = "sensor_id")


    private Sensor sensor;


}
