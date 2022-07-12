import s from './Cast.module.css';

export default function Cast({ name, character, src }) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

  return (
    <>
      <div className={s.photoWrapper}>
        <img
          className={s.photo}
          src={`${BASE_IMG_URL}w342/${src}`}
          alt={name}
        />
      </div>
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
}
