package com.ssafy.marmar.db.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@DynamicInsert
public class Therapist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num;

    // @Enumerated(EnumType.STRING)
    @ColumnDefault("'THERAPIST'")
    private String role;

    @Column(nullable = false, length = 100)
    private String therapistId;

    @Column(nullable = false, length = 100)
    private String therapistPassword;

    @Column(nullable = false, length = 100)
    private String therapistName;

    @Column(nullable = false, length = 100)
    private String therapistDepartment;

    @Column(nullable = false, length = 100)
    private String therapistEmailId;

    @Column(nullable = false, length = 100)
    private String therapistEmailDomain;

    @Column(nullable = false, length = 100)
    private String therapistPhone;

    @ColumnDefault("false")
    private boolean isOngoing;

//    @OneToMany(mappedBy = "student", cascade = CascadeType.REMOVE)
//    List<Therapist> therapists;

}
