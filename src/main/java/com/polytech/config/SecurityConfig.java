package com.polytech.config;


//import jdk.internal.net.http.common.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource datasource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        auth.inMemoryAuthentication()
//                .passwordEncoder(passwordEncoder)
//                .withUser("opaline")
//                .roles("ADMIN")
//                .password(passwordEncoder.encode("pw"));
        auth.jdbcAuthentication()
                .passwordEncoder(passwordEncoder)
                .dataSource(datasource);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                //.mvcMatchers("/","/about", "/contact").permitAll()
                //.mvcMatchers("/admin").hasRole("ADMIN")
                .mvcMatchers(HttpMethod.POST,"/stories").authenticated()
                .mvcMatchers(HttpMethod.GET,"/stories").permitAll()
                .anyRequest().authenticated()
        .and().formLogin()
                .successHandler((req, response, authentication) -> response.setStatus(200))
                .failureHandler((req,res,exception )->res.setStatus(401))
        .and().logout()
        .and().csrf().disable();
    }
}
