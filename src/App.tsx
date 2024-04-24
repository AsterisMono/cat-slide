import { useSlideshow } from "./useSlideshow";
import "./styles.css";
import { useCurrentTime } from "./useCurrentTime";

const query = "https://source.unsplash.com/random/?cat";

export const App = () => {
  const [url] = useSlideshow(query, 15000);
  const time = useCurrentTime();
  return (
    <>
      <div className="container">
        <img src={url} alt="source.unsplash.com" className="view" />
      </div>
      <div className="clock pacifico-regular">
        {/* YYYY/MM/DD HH:MM Weekday zh-CN */}
        <span>
          {time.getFullYear()}/{time.getMonth() + 1}/{time.getDate()}{" "}
        </span>
        <span>
          {time.getHours().toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}
        </span>
      </div>
    </>
  );
};
