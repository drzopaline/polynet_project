package com.polytech.rest;

import com.polytech.business.PublicationService;
import com.polytech.data.InMemoryStoryRepository;
import com.polytech.data.JdbcStoryRepositoryImpl;
import com.polytech.data.Story;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class StoryController extends HttpServlet {


    PublicationService publicationService;

    public StoryController() {
        HikariConfig configuration = new HikariConfig();
        configuration.setJdbcUrl("jdbc:mysql://eu-cdbr-west-02.cleardb.net:3306/heroku_de596f09f064174");
        configuration.setPassword("ac861f9e");
        configuration.setUsername("ba01d4f7765dc9");
        configuration.setMaximumPoolSize(2);
        DataSource datasource = new HikariDataSource(configuration);
        JdbcStoryRepositoryImpl storyRepository = new JdbcStoryRepositoryImpl(datasource);
        publicationService = new PublicationService(storyRepository);

    }

    @PostMapping("/stories")
    public void share(@RequestBody String content) {
        publicationService.share(new Story(content));
    }

    @GetMapping("/stories")
    public List<Story> fetchAll() {
        return publicationService.fetchAll();
    }
}
