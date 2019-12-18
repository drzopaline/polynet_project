package com.polytech.config;

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

    StoryRepository storyRepository(){
        return new JdbcStoryRepository(dataSource());
    }

    PublicationService publicationService(){
        return new PublicationService(storyRepository());
    }
}
