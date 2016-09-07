package domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Notification {

    private String msg;
    private String notificationFrom;

    public Notification() {
    }

    public Notification(String msg, String notificationFrom) {
        this.msg = msg;
        this.notificationFrom = notificationFrom;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public void setNotificationFrom(String notificationFrom) {
        this.notificationFrom = notificationFrom;
    }

    public String getMsg() {
        return msg;
    }

    public String getNotificationFrom() {
        return notificationFrom;
    }
}
