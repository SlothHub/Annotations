package com.person;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Yoni on 4/28/2016.
 */
public interface PersonOwnRepository  extends JpaRepository<Person,Long>
{

}
