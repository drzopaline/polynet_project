package com.polytech.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="story")
public class Story {

    @Id
    @Column(name = "id")
    Long id;

    @Column(name = "content")
    String content;

    @Column(name = "username")
    String username;

    public Story(String content, String username) {
        this.content = content;
        this.username=username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) { this.content = content; }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) { this.username = username; }

    @Override
    public String toString() {
        return "{" + "\"content\":\"" + content + "\"}";
    }
}