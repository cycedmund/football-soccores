import SecondHalfInfo from "./SecondHalfInfo";
import FirstHalfInfo from "./FirstHalfInfo";

const FixtureInfo = ({ fixture }) => {
  const firstHalfEvents = fixture.events.filter(
    (event) => event.time.elapsed <= 45
  );
  const secondHalfEvents = fixture.events.filter(
    (event) => event.time.elapsed > 45
  );

  return (
    <div className="grid grid-cols-1 text-center text-white">
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
      {!fixture.events ? null : (
        <FirstHalfInfo
          firstHalfEvents={firstHalfEvents}
          teams={fixture.teams}
        />
      )}

      {fixture.fixture.status.long === "Second Half" ||
        (fixture.fixture.status.short === "FT" && (
          <header className="bg-slate-800 text-center my-0.5">
            <h2>
              Second Half{" "}
              {fixture.score.fulltime.home !== null ? (
                <span>
                  [{fixture.score.fulltime.home} - {fixture.score.fulltime.away}
                  ]
                </span>
              ) : (
                <span>
                  [{fixture.goals.home} - {fixture.goals.away}]
                </span>
              )}
            </h2>
          </header>
        ))}

      <SecondHalfInfo
        secondHalfEvents={secondHalfEvents}
        teams={fixture.teams}
      />
    </div>
  );
};

export default FixtureInfo;
