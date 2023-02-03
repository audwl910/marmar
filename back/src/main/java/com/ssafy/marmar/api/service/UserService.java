package com.ssafy.marmar.api.service;

import com.ssafy.marmar.db.model.Student;
import com.ssafy.marmar.db.model.Therapist;

public interface UserService {

    Student getStudentByUserId(String userId);
    Therapist getTherapistByUserId(String userId);

    Student getStudentByUserEmail(String userEmail);
    Therapist getTherapistByUserEmail(String userEmail);

    boolean studentIdEmailCheck(String userEmail, String userId);
    boolean therapistIdEmailCheck(String userEmail, String userId);

    boolean studentPwdEmailCheck(String userEmail, String userName);
    boolean therapistPwdEmailCheck(String userEmail, String userName);
}
