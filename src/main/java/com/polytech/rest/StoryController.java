package com.polytech.rest;

import com.polytech.business.PublicationService;
import com.polytech.data.InMemoryStoryRepository;
import com.polytech.data.Story;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins="*")
public class StoryController extends HttpServlet {

    InMemoryStoryRepository storyRepository = new InMemoryStoryRepository();
    PublicationService publicationService = new PublicationService(storyRepository);

    @PostMapping("/stories")
    public void share(@RequestBody String content) {
        publicationService.share(new Story(content));
    }

    @GetMapping("/stories")
    public List<Story> fetchAll() {
        return publicationService.fetchAll();
    }
}
