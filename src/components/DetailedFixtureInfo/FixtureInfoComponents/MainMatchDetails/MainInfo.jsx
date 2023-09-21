import SecondHalfInfo from "./SecondHalfInfo";
import FirstHalfInfo from "./FirstHalfInfo";

const MainInfo = ({ fixture }) => {
  const firstHalfEvents = fixture.events.filter(
    (event) => event.time.elapsed <= 45
  );
  const secondHalfEvents = fixture.events.filter(
    (event) => event.time.elapsed > 45
  );

  return (
    <div className="grid grid-cols-1 text-center text-white">
      {fixture.fixture.status.short === "NS" ? (
        <header className="bg-slate-800 text-center">
          <h2>No Details</h2>
        </header>
      ) : (
        <header className="bg-slate-800 text-center">
          <h2>
            First Half{" "}
            {fixture.score.halftime.home !== null && (
              <span>
                [{fixture.score.halftime.home} - {fixture.score.halftime.away}]
              </span>
            )}
          </h2>
        </header>
      )}

      {firstHalfEvents.length === 0 ? (
        <span className="m-5"> - </span>
      ) : (
        <FirstHalfInfo
          firstHalfEvents={firstHalfEvents}
          teams={fixture.teams}
        />
      )}

      {(fixture.fixture.status.long === "Second Half" ||
        fixture.fixture.status.short === "FT") && (
        <header className="bg-slate-800 text-center my-0.5">
          <h2>
            Second Half{" "}
            <span>
              [{fixture.goals.home - fixture.score.halftime.home} -
              {fixture.goals.away - fixture.score.halftime.away}]
            </span>
          </h2>
        </header>
      )}

      {(fixture.fixture.status.long === "Second Half" ||
        fixture.fixture.status.short === "FT") &&
        (secondHalfEvents.length === 0 ? (
          <span className="m-5"> - </span>
        ) : (
          <SecondHalfInfo
            secondHalfEvents={secondHalfEvents}
            teams={fixture.teams}
          />
        ))}
    </div>
  );
};

export default MainInfo;
