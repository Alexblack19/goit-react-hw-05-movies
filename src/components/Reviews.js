import { useParams } from "react-router-dom";

const Reviews = () => {
    // useEffect(() => {
    //   //HTTP
    // }, []);
    const {movieId} = useParams()
    return <div>Reviews: {movieId}</div>;
  };

  export default Reviews
