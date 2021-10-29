import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { actionCreators } from "../state/index";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, pristine, submitting, reset, change } = props;
  const formValues = useSelector((state) => state.form);

  const { addSong } = bindActionCreators(actionCreators, dispatch);

  console.log(formValues);

  const handleOnSubmit = (event) => {
    let timestamp = new Date().getTime() * Math.random();
    console.log(
      timestamp,
      formValues.input.values.title,
      formValues.input.values.artist,
      formValues.input.values.genre,
      formValues.input.values.rating
    );
    addSong({
      id: timestamp,
      title: formValues.input.values.title,
      artist: formValues.input.values.artist,
      genre: formValues.input.values.genre,
      rating: formValues.input.values.rating
    });
    dispatch(reset("InputForm"));
  };

  let button = (
    <div>
      <button type="submit" disabled={pristine || submitting}>
        +
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear
      </button>
    </div>
  );

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="input-form flex-container"
      >
        <div className="input-field flex-item">
          <label for="title">Title</label>
          <Field
            autoFocus="true"
            name="title"
            component="input"
            type="text"
            placeholder="Titel..."
          />
        </div>
        <div className="input-field flex-item">
          <label for="artist">Artist</label>
          <Field
            component="input"
            name="artist"
            type="text"
            placeholder="Artiest..."
          />
        </div>
        <div className="input-field flex-item">
          <label for="genre">Genre</label>
          <Field name="genre" component="select">
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="funk">Funk</option>
            <option value="disco">Disco</option>
            <option value="jazz">Jazz</option>
          </Field>
        </div>
        <div className="input-field flex-item">
          <label for="rating">Rating</label>
          <Field name="rating" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
        <div className="input-field flex-item">{button}</div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "input"
})(InputForm);
