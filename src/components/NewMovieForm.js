import React, { useEffect, useState } from "react";
import TextInput from "./tools/forms/TextInput";
import SearchSelection from "./tools/forms/SearchSelection";
import { Button, Image } from "semantic-ui-react";
const NewMovieForm = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({isError:false});
  useEffect(() => {
    console.log("form render oldu");
  });
  const categories = [
    {
      key: 1,
      value: "Aksiyon",
      text: "Aksiyon",
    },
    {
      key: 2,
      value: "Bilim Kurgu",
      text: "Bilim Kurgu",
    },
    {
      key: 3,
      value: "Gerilim",
      text: "Gerilim",
    },
    {
      key: 4,
      value: "Spor",
      text: "Spor",
    },
    {
      key: 5,
      value: "Korku",
      text: "Korku",
    },
    {
      key: 6,
      value: "Tarih",
      text: "Tarih",
    },
  ];

  const countries = [
    {
      key: 1,
      value: "Türkiye",
      text: "Türkiye",
    },
    {
      key: 2,
      value: "Amerika",
      text: "Amerika",
    },
    {
      key: 3,
      value: "İngiltere",
      text: "İngiltere",
    },
    {
      key: 4,
      value: "Fransa",
      text: "Fransa",
    },
    {
      key: 5,
      value: "Almanya",
      text: "Almanya",
    },
  ];
  const onChangeMovie = (e) => {
    let { name, value } = e.target;
    if (name === "imdbScore" || name === "year") {
      value = parseFloat(value);
    }
    else{
      value = value.toString().trim();
    }
    setMovie((currentMovie) => ({
      ...currentMovie,
      [name]: value
    }));

    // validation
    formValidator(name, value);
    console.log(movie);
  };

  const formCheck = () => {
    let isFormTrue = true;
    let hasProperties = ['title', 'category', 'country', 'year', 'imdbScore', 'name', 'surname', 'bio', 'image'];
    for(let property of hasProperties){
      if(!movie.hasOwnProperty(property)){
        setError(currentError => (
          {
            ...currentError,
            [property]:property + ' alanı boş bırakılamaz',
            isError:true
          }
        ))
        isFormTrue = false;
      }
    }
    return isFormTrue;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formCheck()){
      alert('Hata yok');
    }
    else{
      alert('hata var');
    }
  }

  const onSelectCategory = (e, { value }) => {
    setMovie((currentMovie) => ({
      ...currentMovie,
      category: value,
    }));
  };
  const onSelectCountry = (e, { value }) => {
    setMovie((currentMovie) => ({
      ...currentMovie,
      country: value,
    }));
  };

  const titleValidator = (name, value) => {
    if (name === "title" && value.length < 5) {
      setError((currentError) => ({
        ...currentError,
        [name]: "En az 5 karakter olmalıdır",
        isError:true
      }));
    } else if (name === "title" && value.length >= 5) {
      let newError = { ...error, isError:false };
      delete newError[name];
      setError(newError);
    }
  };

  const yearValidator = (name, value) => {
    if (name === "year") {
      if (value < 1900) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Yıl 1900 dan geri olamaz",
          isError:true
        }));
      } else if (value > 2020) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Yıl 2020 den ileri olamaz",
          isError:true
        }));
      } else {
        let newError = { ...error, isError:false};
        delete newError[name];
        setError(newError);
      }
    }
  };

  const imdbScoreValidator = (name, value) => {
    if (name === "imdbScore") {
      let newValue = parseInt(value);
      if (newValue < 1) {
        setError((currentError) => ({
          ...currentError,
          [name]: "İmdb Score 1 den az olamaz",
          isError:true
        }));
      } else if (newValue > 10) {
        setError((currentError) => ({
          ...currentError,
          [name]: "İmdb Score 10 dan yüksek olamaz",
          isError:true
        }));
      } else {
        let newError = { ...error, isError:false};
        delete newError[name];
        setError(newError);
      }
    }
  };

  const nameValidator = (name, value) => {
    if (name === "name") {
      if (value.length < 5) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor name en az 5 karakter olabilir",
          isError:true
        }));
      } else if (value.length > 20) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor name en fazla 20 karakter olabilir",
          isError:true
        }));
      } else {
        let newError = { ...error, isError:false};
        delete newError[name];
        setError(newError);
      }
    }
  };

  const surnameValidator = (name, value) => {
    if (name === "surname") {
      if (value.length < 5) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Surname en az 5 karakter olabilir",
          isError:true
        }));
      } else if (value.length > 20) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Surname en fazla 20 karakter olabilir",
          isError:true
        }));
      } else {
        let newError = { ...error, isError:false };
        delete newError[name];
        setError(newError);
      }
    }
  };
  const bioValidator = (name, value) => {
    if (name === "bio") {
      if (value.length < 10) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Biography en az 10 karakter olabilir",
          isError:true
        }));
      } else if (value.length > 50) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Biography en fazla 50 karakter olabilir",
          isError:true
        }));
      } else {
        let newError = { ...error, isError:false };
        delete newError[name];
        setError(newError);
      }
    }
  };

  const imageValidator = (name, value) => {
    if (name === "image" && value.length < 5) {
      setError((currentError) => ({
        ...currentError,
        [name]: "En az 10 karakter olmalıdır",
        isError:true
      }));
    } else if (name === "image" && value.length >= 5) {
      let newError = { ...error, isError:false };
      delete newError[name];
      setError(newError);
    }
  };

  const formValidator = (name, value) => {
    titleValidator(name, value);
    yearValidator(name, value);
    imdbScoreValidator(name, value);
    nameValidator(name, value);
    surnameValidator(name, value);
    bioValidator(name, value);
    imageValidator(name, value);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <TextInput
        name="title"
        placeHolder="Enter Title"
        label="Title"
        onChange={onChangeMovie}
        error={error}
      />

      <SearchSelection
        name="category"
        placeHolder="Select Category"
        label="Category"
        onSelect={onSelectCategory}
        error={error}
        data={categories}
      />

      <SearchSelection
        name="country"
        placeHolder="Select Country"
        label="Country"
        onSelect={onSelectCountry}
        error={error}
        data={countries}
      />

      <TextInput
        name="year"
        placeHolder="Enter Year"
        label="Year"
        onChange={onChangeMovie}
        error={error}
      />

      <TextInput
        name="imdbScore"
        placeHolder="Enter IMDB"
        label="IMDB"
        onChange={onChangeMovie}
        error={error}
      />

      <TextInput
        name="name"
        placeHolder="Enter Direktor Name"
        label="Direktor Name"
        onChange={onChangeMovie}
        error={error}
      />

      <TextInput
        name="surname"
        placeHolder="Enter Direktor Surname"
        label="Direktor Surname"
        onChange={onChangeMovie}
        error={error}
      />
      <TextInput
        name="bio"
        placeHolder="Enter Biography"
        label="Biography"
        onChange={onChangeMovie}
        error={error}
      />

      <TextInput
        name='image'
        placeHolder='Enter Image URL'
        label='Image URL'
        onChange={onChangeMovie}
        error={error}
      />

      <div className='field'>
        <Image src={movie['image']} size='small' />
      </div>
      <div className="field">
        <Button animated="fade" type='submit'>
          <Button.Content visible>Alanları doldurun</Button.Content>
          <Button.Content hidden>Kaydet</Button.Content>
        </Button>
      </div>
    </form>
  );
};

export default NewMovieForm;
