package com.person;

import java.util.List;

/**
 * Created by Yoni on 4/28/2016.
 */
public interface PersonService
{
    List<Person> findAll();
    Person findByid(long id);
    void save(Person person);
}
