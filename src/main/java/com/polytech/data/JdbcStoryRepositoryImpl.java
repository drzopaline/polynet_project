package com.polytech.data;

import java.sql.Connection;
import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class JdbcStoryRepositoryImpl implements StoryRepository {

    private DataSource dataSource;

    public JdbcStoryRepositoryImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void save(Story story) {
        try{
            Connection connection = dataSource.getConnection();
            String sql="INSERT INTO story (content) VALUES(?)";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1,story.content);
            preparedStatement.executeUpdate();
        } catch(SQLException e){
            throw new RuntimeException(e);
        }

    }

    @Override
    public List<Story> findAll() {
        List<Story> stories = new ArrayList<>();
        try {
            Connection connection = dataSource.getConnection();
            String sql="SELECT * FROM story";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Story story = new Story(resultSet.getString("content"));
                stories.add(story);
            }
            //preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return stories;
    }
}