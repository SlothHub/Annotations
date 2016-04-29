package com.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

/**
 * Created by Yoni on 4/28/2016.
 */
@RestController
public class PersonController
{
    static Logger log = Logger.getLogger(PersonController.class.getName());
    @Autowired
    PersonService personService;

    @RequestMapping("/getPeople")
    public List<Person> getPeople()
    {
        log.info("fetching people");
        return personService.findAll();
    }

    @RequestMapping("/getPerson")
    public Person getPerson(@RequestParam(value = "id") long id)
    {

        return personService.findByid(id);
    }

    @RequestMapping("/savePerson")
    public void savePerson(@RequestParam(value = "firstName") String firstName,
                           @RequestParam(value = "lastName")String lastName)
    {
        log.info("adding "+firstName+" "+lastName+" to db");
        personService.save(new Person(firstName,lastName));
    }

    @RequestMapping(value="/savePersonPost", method = RequestMethod.POST,
            headers = "Content-Type=application/x-www-form-urlencoded")
    public void savePersonPost(@RequestParam(value = "firstName") String firstName,
                           @RequestParam(value = "lastName")String lastName)
    {
        log.info("adding "+firstName+" "+lastName+" to db via post");
        personService.save(new Person(firstName,lastName));
    }
}
