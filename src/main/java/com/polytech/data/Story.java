package com.polytech.data;

public class Story {
    String content;

    public Story(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public String setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "{" + "\"content\":\"" + content + "\"}";
    }
}