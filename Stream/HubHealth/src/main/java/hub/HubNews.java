package hub;

import domain.News;
import org.springframework.web.bind.annotation.CrossOrigin;
import service.TwitterService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class HubNews {

    @RequestMapping("/news")
    public List<News> news() {
        return new TwitterService().twitterObservable();
    }
}
