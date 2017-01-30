FROM java

COPY target/spring-boot-reactjs-*.war /apps/spring-boot-reactjs.war
EXPOSE 8080

WORKDIR /apps
CMD [ "java", "-jar", "spring-boot-reactjs.war" ]