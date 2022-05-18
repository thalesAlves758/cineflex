import Movie from "./Movie";
import RenderIf from './utilities/RenderIf';

export default function ReservationInfo ({ image, title, sessionDatetime = null }) {
  return (
    <>
      <Movie image={image} title={title} small={true} />
      <div className="session-info">
        <p>{title}</p>
        
        <RenderIf isTrue={sessionDatetime}>
          <p>{ sessionDatetime }</p>
        </RenderIf>
      </div>
    </>
  );
}
