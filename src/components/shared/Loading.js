import loadingGif from '../../assets/img/loading.gif';

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="loading gif" /> 
    </div>
  );
}
