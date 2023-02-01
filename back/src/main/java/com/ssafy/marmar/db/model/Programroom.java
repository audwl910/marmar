package com.ssafy.marmar.db.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@DynamicInsert
public class Programroom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num;

    private int wordQuestionCnt;

    @ColumnDefault("false")
    private boolean status;

}
