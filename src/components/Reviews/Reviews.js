import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchReviews } from '../../service/service';
import Review from 'components/Review/Review';

export default function Reviews() {
  const [reviews, setReviews] = useState('');
  const location = useLocation();

  const {
    state: { id },
  } = location;

  useEffect(() => {
    fetchReviews(id).then(res => {
      console.log(res);
      setReviews(res.results);
    });
  }, [id]);

  return (
    <ul>
      {reviews.map(({ author, content }) => {
        console.log({ author, content });

        return (
          <li key={author}>
            <Review author={author} content={content} />
          </li>
        );
      })}
    </ul>
  );
}
