import moment from 'moment';

export const mapData = (data) => {
  return data.map((row) => {
    return {
      id: row.id,
      poster: row.poster_path ? row.poster_path : row.profile_path,
      title: row.title ? row.title : row.name,
      releaseDate: row.release_date
        ? moment(row.release_date).format('YYYY/MM/DD')
        : null,
      firstAirDate: row.first_air_date
        ? moment(row.first_air_date).format('YYYY/MM/DD')
        : null,
      year: moment(
        row.release_date ? row.release_date : row.first_air_date,
      ).year(),
      type: row.media_type,
      typeName:
        row.media_type === 'movie'
          ? 'Movie'
          : row.media_type === 'tv'
          ? 'TV Show'
          : row.media_type === 'person'
          ? 'People'
          : '',
      overview: row.overview
        ? row.overview
        : row.known_for && row.known_for.length
        ? row.known_for[0].overview
        : '',
      gender:
        row.media_type === 'person'
          ? row.gender === 1
            ? 'Female'
            : 'Male'
          : null,
      rating: row.vote_average * 10,
    };
  });
};
