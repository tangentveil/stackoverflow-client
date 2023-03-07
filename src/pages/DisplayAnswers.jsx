import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from 'moment'
import Avatar from "../components/Avatar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAnswer } from "../actions/AskQuestion";

const DisplayAnswers = ({ question, handleShare}) => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);
  const {id} = useParams()

  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers-1))
  }

  return (
    <div>
      {question.answer.map((ans) => {
        // console.log(ans.userAnswered)
        return (
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div>
                <button
                  type="button"
                  className="edit-question-btn"
                  onClick={handleShare}
                >
                  Share
                </button>
                {user?.result?._id === ans?.userId && (
                  <button
                    type="button"
                    className="edit-question-btn"
                    onClick={()=>handleDelete(ans._id, question.noOfAnswers)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                <Link
                  to={`/Users/${ans.userId}`}
                  className="user-link"
                  style={{ color: "#0086d8" }}
                >
                  <Avatar backgroundColor="green" px="8px" py="5px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAnswers;
