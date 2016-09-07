package hub;

import domain.Notification;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.DB;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class HubNotification {

    @RequestMapping("/notification")
    public List<Notification> getNotification() {
        List<Notification> notification = new ArrayList<>(DB.notifications);
        DB.notifications = new ArrayList<>();
        return notification;
    }
}
