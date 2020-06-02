import {EMOJIS} from '../utils/const.js';
import {getRandomArrayItem} from '../utils/common.js';
import {getRandomDate} from '../utils/film-utils.js';

const text = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const author = [`Tim Macoveev`, `John Doe`, `John Doe`, `John Doe`];

const generationComment = () => {
  return {
    emoji: getRandomArrayItem(EMOJIS),
    text: getRandomArrayItem(text),
    author: getRandomArrayItem(author),
    date: getRandomDate(2010, 2019),
  };
};

const generationComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generationComment);
};

const generationMovieComments = (count, movies) => {
  return movies.reduce((acc, movie) => {
    acc.push({
      id: movie.id,
      comments: generationComments(count),
    });
    return acc;
  }, []);
};

export {generationMovieComments};
