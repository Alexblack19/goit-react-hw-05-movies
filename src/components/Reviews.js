import { useParams } from "react-router-dom";

export const Reviews = () => {
    // useEffect(() => {
    //   //HTTP
    // }, []);
    const {movieId} = useParams()
    return <div>Reviews: {movieId}</div>;
  };

