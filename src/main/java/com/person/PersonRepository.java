package com.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Yoni on 4/28/2016.
 */
@Repository
public interface PersonRepository  extends PagingAndSortingRepository<Person, Long>
{
    List<Person>findAll();
    Person findByid(long id);
}
