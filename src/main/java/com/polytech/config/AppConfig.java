package com.polytech.config;
import com.polytech.business.PublicationService;
//import com.polytech.data.JdbcStoryRepositoryImpl;
import com.polytech.data.StoryRepository;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class AppConfig {
    @Value("${database.username}")
    private String username;
    @Value("${database.password}")
    private String password;
    @Value("${database.url}")
    private String url;

    @Bean
    DataSource dataSource(){
        HikariConfig configuration = new HikariConfig();
        configuration.setJdbcUrl(url);
        configuration.setPassword(password);
        configuration.setUsername(username);
        DataSource datasource = new HikariDataSource(configuration);
        return datasource;
    }

//    @Bean
//    StoryRepository storyRepository(){
//        return new JdbcStoryRepositoryImpl(dataSource());
//    }


}
