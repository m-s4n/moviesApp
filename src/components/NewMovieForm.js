import React, { useState, useEffect } from "react";
import TextInput from "./tools/forms/TextInput";
import SearchSelection from "./tools/forms/SearchSelection";
import { Button, Image } from "semantic-ui-react";
import alertify from "alertifyjs";

const NewMovieForm = ({ addMovie, addedMovie }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    showInformation(addedMovie, isAdded);
  },[addedMovie,isAdded]);
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
    } else {
      value = value.toString().trim();
    }
    setMovie((currentMovie) => ({
      ...currentMovie,
      [name]: value,
    }));

    // validation
    formValidator(name, value);
  };

  const formCheck = () => {
    let isFormTrue = true;
    let hasProperties = [
      "title",
      "category",
      "country",
      "year",
      "imdbScore",
      "name",
      "surname",
      "bio",
      "image",
    ];
    for (let property of hasProperties) {
      if (!movie.hasOwnProperty(property)) {
        setError((currentError) => ({
          ...currentError,
          [property]: property + " alanı boş bırakılamaz",
          isError: true,
        }));
        isFormTrue = false;
      }
    }
    return isFormTrue;
  };

  const showInformation = (addedMovie, isAdded) => {
      if (addedMovie.isFilled && isAdded) {
        alertify.success("Movie added successfully");
        setIsAdded(false);
      } else if (addedMovie.isRejected.status && isAdded) {
        alertify.error("An error occurred while add movie");
        setIsAdded(false);
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formCheck()) {
      addMovie(movie);
      setIsAdded(true);
    }
  };

  const onSelectCategory = (e, { value }) => {
    let newError = { ...error };
    setMovie((currentMovie) => ({
      ...currentMovie,
      category: value,
    }));
    delete newError["category"];
    setError(newError);
  };
  const onSelectCountry = (e, { value }) => {
    let newError = { ...error };
    setMovie((currentMovie) => ({
      ...currentMovie,
      country: value,
    }));

    delete newError["country"];
    setError(newError);
  };

  const titleValidator = (name, value) => {
    if (name === "title" && value.length < 10) {
      setError((currentError) => ({
        ...currentError,
        [name]: "En az 10 karakter olmalıdır",
      }));
    } else if (name === "title" && value.length >= 10) {
      let newError = { ...error };
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
        }));
      } else if (value > 2020) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Yıl 2020 den ileri olamaz",
        }));
      } else {
        let newError = { ...error };
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
        }));
      } else if (newValue > 10) {
        setError((currentError) => ({
          ...currentError,
          [name]: "İmdb Score 10 dan yüksek olamaz",
        }));
      } else {
        let newError = { ...error };
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
        }));
      } else if (value.length > 20) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor name en fazla 20 karakter olabilir",
        }));
      } else {
        let newError = { ...error };
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
        }));
      } else if (value.length > 20) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Surname en fazla 20 karakter olabilir",
        }));
      } else {
        let newError = { ...error };
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
        }));
      } else if (value.length > 50) {
        setError((currentError) => ({
          ...currentError,
          [name]: "Direktor Biography en fazla 50 karakter olabilir",
        }));
      } else {
        let newError = { ...error };
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
      }));
    } else if (name === "image" && value.length >= 5) {
      let newError = { ...error };
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
    <form className="ui form" onSubmit={handleSubmit} loading="true">
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
        name="image"
        placeHolder="Enter Image URL"
        label="Image URL"
        onChange={onChangeMovie}
        error={error}
      />

      <div className="field">
        <Image src={movie["image"]} size="small" />
      </div>
      <div className="field">
        <Button animated="fade" type="submit">
          <Button.Content visible>Alanları doldurun</Button.Content>
          <Button.Content hidden>Kaydet</Button.Content>
        </Button>
      </div>
    </form>
  );
};

export default NewMovieForm;
