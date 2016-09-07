package domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class News {

    private final String text;
    private final String userName;
    private final String userImage;
    private final String urlEntity;

    public News(String text, String userName, String userImage, String url) {
        this.text = text;
        this.userName = userName;
        this.userImage = userImage;
        this.urlEntity = url;
    }


    public String getText() {
        return text;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserImage() {
        return userImage;
    }

    public String getUrlEntity() {
        return urlEntity;
    }
}
