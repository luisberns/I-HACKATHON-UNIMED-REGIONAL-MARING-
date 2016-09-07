package hub;

import domain.Exam;
import domain.Notification;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.DB;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class HubExams {

    @RequestMapping("/exams")
    public List<Exam> getExams() {
        List<Exam> notification = new ArrayList<>(DB.examsList);
        return notification;
    }
}
