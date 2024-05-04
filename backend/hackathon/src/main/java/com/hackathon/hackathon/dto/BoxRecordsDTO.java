package com.hackathon.hackathon.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoxRecordsDTO {
    private Long boxId;
    private List<RecordsDTO> recordsDTOList;
}
