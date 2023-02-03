package com.ssafy.marmar.api.response;

import com.ssafy.marmar.db.model.Student;
import com.ssafy.marmar.db.model.Wordspeaking;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WordRes {

    int num;
    String answer;
    String difficulty;
    String imagePath;


    public Wordspeaking toEntity(){
        Wordspeaking build = Wordspeaking.builder()
                .num(num)
                .answer(answer)
                .difficulty(difficulty)
                .imagePath(imagePath)
                .build();
        return build;
    }


    @Builder
    public WordRes(int num, String answer, String difficulty, String imagePath){
        this.num = num;
        this.answer = answer;
        this.difficulty = difficulty;
        this.imagePath = imagePath;
    }



}
