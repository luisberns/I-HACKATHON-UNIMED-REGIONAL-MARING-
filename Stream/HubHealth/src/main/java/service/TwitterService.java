package service;


import domain.News;
import twitter4j.Query;
import twitter4j.Status;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TwitterService {

    public static final String ESSEÉOPLANO = "#esseéoplano";
    public static final String HACKATHON_UNIMED = "#hackathonUnimed";


    public List<News> twitterObservable() {

        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey("9NtbTyocE2XqEP9OX3kQr2O98")
                .setOAuthConsumerSecret("Y4PLE8YDuttrUAmCtD5DqLGiej4sngBuhYeRvGbc4GDBchPxEF")
                .setOAuthAccessToken("189110937-ORp4hcM46cfLYJPAcszdxrJi9zH2gQjnCvTXZ38u")
                .setOAuthAccessTokenSecret("U1UdlnYukvlADgPd1UKzEMM9FwoJpTZmGMYAtr57cl5PY");

        twitter4j.Twitter twitter = new TwitterFactory(cb.build()).getInstance();

        List<Status> tweets = new ArrayList<>();

        tweets.addAll(getTweetsFrom(twitter, ESSEÉOPLANO));
        tweets.addAll(getTweetsFrom(twitter, HACKATHON_UNIMED));

        return tweets.stream()
                .map(s ->
                    new News(s.getText(), s.getUser().getName(), s.getUser().getProfileImageURL(), s.getUser().getURL())
                )
                .collect(Collectors.toList());
    }

    private List<Status> getTweetsFrom(twitter4j.Twitter twitter, String s) {
        Query query = new Query(s);
        query.setCount(5);
        try {
            return twitter.search(query).getTweets();
        } catch (TwitterException e) {
            e.printStackTrace();
            return Arrays.asList();
        }
    }
}
