package com.texas.student.management.repository.attendance;

import com.texas.student.management.model.attendence.DailyBasedAttendance;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface DailyBasedAttendanceRepository extends CrudRepository<DailyBasedAttendance,Long> {


}