import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchReviews } from 'service/service';
import Review from 'components/Review';

export default function Reviews() {
  const [reviews, setReviews] = useState('');
  const location = useLocation();

  const {
    state: { id },
  } = location;

  useEffect(() => {
    fetchReviews(id).then(res => {
      res.results.length !== 0 ? setReviews(res.results) : alert('No results');
    });
  }, [id]);

  return (
    <ul>
      {reviews
        ? reviews.map(({ author, content, author_details }) => {
            return (
              <li key={author_details.username}>
                <Review author={author} content={content} />
              </li>
            );
          })
        : null}
    </ul>
  );
}
