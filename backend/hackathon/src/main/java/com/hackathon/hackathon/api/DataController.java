package com.hackathon.hackathon.api;

import com.hackathon.hackathon.model.SensorType;
import com.hackathon.hackathon.services.BoxService;
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
public class DataAccessController {

    @Autowired
    private BoxService boxService;


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



}
