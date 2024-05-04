package com.hackathon.hackathon.services;

import com.hackathon.hackathon.model.Box;
import com.hackathon.hackathon.repositories.BoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoxService {

    @Autowired
    private BoxRepository boxRepository;

    public List<Long> getBoxIDsList(){
        // Fetch all boxes from the repository
        List<Box> boxes = boxRepository.findAll();
        // Convert the list of Box objects to a list of IDs
        return boxes.stream().map(Box::getBoxId).collect(Collectors.toList());
    }
}
