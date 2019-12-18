package com.polytech.data;

import java.util.ArrayList;
import java.util.List;

public class InMemoryStoryRepository implements StoryRepository {
    List<Story> database = new ArrayList();

    private ArrayList<Story> memoryList;

    public void save(Story story) {
        // INSERT SQL
        database.add(story);
    }

    public List<Story> findAll() {
        return database;
    }
}