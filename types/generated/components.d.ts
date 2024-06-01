import type { Schema, Attribute } from '@strapi/strapi';

export interface DirectorsDirector extends Schema.Component {
  collectionName: 'components_directors_directors';
  info: {
    displayName: 'Director';
  };
  attributes: {};
}

export interface DirectorsFrankDarabont extends Schema.Component {
  collectionName: 'components_directors_frank_darabonts';
  info: {
    displayName: 'Frank Darabont';
  };
  attributes: {
    Director: Attribute.String;
  };
}

export interface GenreDrama extends Schema.Component {
  collectionName: 'components_genre_dramas';
  info: {
    displayName: 'Drama';
  };
  attributes: {
    Drama: Attribute.String;
  };
}

export interface GenreGenre extends Schema.Component {
  collectionName: 'components_genre_genres';
  info: {
    displayName: 'Genre';
  };
  attributes: {};
}

export interface MoviesFriday extends Schema.Component {
  collectionName: 'components_movies_fridays';
  info: {
    displayName: 'Movie';
    icon: 'play';
    description: '';
  };
  attributes: {
    Rating: Attribute.Decimal;
    Genre: Attribute.Component<'genre.genre'>;
    Content: Attribute.String;
    Director: Attribute.Component<'directors.frank-darabont', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'directors.director': DirectorsDirector;
      'directors.frank-darabont': DirectorsFrankDarabont;
      'genre.drama': GenreDrama;
      'genre.genre': GenreGenre;
      'movies.friday': MoviesFriday;
    }
  }
}
