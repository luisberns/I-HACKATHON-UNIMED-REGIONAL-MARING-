package hub;

import domain.Exam;
import domain.Notification;
import org.springframework.web.bind.annotation.*;
import repository.DB;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class HubListen {

    @RequestMapping(value = "/listen/notifications", method = RequestMethod.POST)
    public void postNotification(@RequestBody Notification notification) {
        DB.notifications.add(notification);
    }

    @RequestMapping(value = "/listen/exams", method = RequestMethod.POST)
    public void postNotification(@RequestBody Exam exam) {
        DB.examsList.add(exam);
        DB.notifications.add(new Notification("Seu Liberação para o exame "+ exam.getName()+" foi liberado.","Unimed"));
    }
}
