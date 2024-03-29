import bin from '../../../public/img/bin.png';

export default function Watchlist({
  watchList,
  watchListDispatch,
  setMovieDetails,
}) {
  return (
    <div className="container--watchlist">
      <h3>watchlist</h3>
      <ul className="watchlist--ul">
        {watchList.length > 0 ? (
          watchList.map(({ id, title, poster }) => (
            <li className="watchlist--li" key={id}>
              <img className="image--watchlist" src={poster} alt="Filmposter" />
              <h4>{title}</h4>
              <button
                className="button--watchlist--remove"
                onClick={() => watchListDispatch({ id, action: 'remove' })}
              >
                <img className="image--icon" src={bin} alt="trash bin" />
              </button>
            </li>
          ))
        ) : (
          <li className="watchlist--li">
            <h4>watchlist is empty</h4>
          </li>
        )}
      </ul>
      {watchList.length > 0 && (
        <button
          aria-label="clear watchlist"
          className="button--clearWatchlist"
          onClick={() => {
            watchListDispatch({ action: 'clear' });
            setMovieDetails(null);
          }}
        >
          clear watchlist
        </button>
      )}
    </div>
  );
}
