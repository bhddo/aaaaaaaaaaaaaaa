function send()
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("iput_check_box").value;
    if(answer_turn == actual_answer)
    {
        if(answer_turn == "player1")
        {
            updade_player1_score =  player1_score +1;
            document.getElementById("player1_score").innerHTML = updade_player1_score;
        }
        else
        {
            updade_player2_score =  player1_score +1;
            document.getElementById("player2_score").innerHTML = updade_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "turno de perguntas - " + player2_name
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "turno de perguntas - " + player1_name
    }
}
