package domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Exam {

    private String name;
    private String situation;
    private String notificationFrom;

    public Exam() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public String getNotificationFrom() {
        return notificationFrom;
    }

    public void setNotificationFrom(String notificationFrom) {
        this.notificationFrom = notificationFrom;
    }
}
