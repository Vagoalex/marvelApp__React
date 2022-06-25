import { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import useMarvelService from '../../hooks/useMarvelService';
import ErrorMessageComponent from '../ErrorMessage/ErrorMessage';

import './CharForm.scss';

const CharForm = () => {
  const [character, setCharacter] = useState(null);

  const { getCharacterByName, loading, error, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setCharacter(char);
  };

  const updateChar = (charName) => {
    clearError();

    getCharacterByName(charName).then(onCharLoaded);
  };

  const results = !character ? null : character.length > 0 ? (
    <div className='found-char'>
      <p className='CharForm-desk found-char__desk'>
        There is! Visit {character.name} page?
      </p>
      <Link
        to={`/characters/${character.id}`}
        className='button button__secondary found-char__button'
        type='button'
      >
        <div className='inner'>TO PAGE</div>
      </Link>
    </div>
  ) : (
    <div className='found-char'>
      <p className='CharForm-desk CharForm-desk--error'>
        The character was not found. Check the name and try again
      </p>
    </div>
  );

  return (
    <div className='CharForm'>
      <h3 className='pulse CharForm__title'>Or find a character by name:</h3>
      <Formik
        initialValues={{
          charName: '',
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required('This field is required'),
        })}
        onSubmit={({ charName }) => updateChar(charName)}
      >
        <Form className='char-form'>
          <Field
            id='charName'
            name='charName'
            className='char-form__input'
            placeholder='Enter name'
          />
          <button className='button' type='submit'>
            <div className='inner'>FIND</div>
          </button>

          <FormikErrorMessage
            component='div'
            className='char-form__error CharForm-desk--error'
            name='charName'
          />
        </Form>
      </Formik>
      {results}
    </div>
  );
};

export default CharForm;
