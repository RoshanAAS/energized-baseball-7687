import axios from "axios";
import {
  GET_TEACHER_FAILURE,
  GET_TEACHER_REQUEST,
  GET_TEACHER_SUCCESS,
} from "./actionType";

export const getTeacherData = (param) => (dispatch) => {
  dispatch({ type: GET_TEACHER_REQUEST });
  axios
    .get(`https://renderdatabase.onrender.com/teacher`, param)
    .then((res) => {
      dispatch({ type: GET_TEACHER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_TEACHER_FAILURE });
    });
};

export const patch = () => {};
