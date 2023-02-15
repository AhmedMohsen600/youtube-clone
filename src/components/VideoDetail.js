import { useParams } from 'react-router-dom';

function VideoDetail() {
  const { id } = useParams();
  console.log(id);
  return <div>VideoDetail</div>;
}

export default VideoDetail;
