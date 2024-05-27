package com.plortal.plortal.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI plortalServiceAPI() {
        return new OpenAPI().info(new Info().title("Plortal Service API")
                .description("This is the REST API for Plortal Application")
                .version("v0.0.1")
        );
    }
}
