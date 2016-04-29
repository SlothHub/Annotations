package com.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Yoni on 4/28/2016.
 */
@Service
@Transactional
public class PersonServiceImpl implements PersonService {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonOwnRepository personOwnRepository;
    @Override
    public List<Person> findAll() {
        return personRepository.findAll();
    }

    @Override
    public Person findByid(long id) {
        return personRepository.findByid(id);
    }

    @Override
    public void save(Person person) {
        personOwnRepository.save(person);
    }
}
