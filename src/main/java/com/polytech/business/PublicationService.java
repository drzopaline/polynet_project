package com.polytech.business;

import com.polytech.data.Story;
import com.polytech.data.StoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicationService {

    private StoryRepository storyRepository;

    public PublicationService(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    public void share(Story story) {
        //  business logic
        storyRepository.save(story);
    }
    public List<Story> fetchAll(){
        return storyRepository.findAll();
    }
}
