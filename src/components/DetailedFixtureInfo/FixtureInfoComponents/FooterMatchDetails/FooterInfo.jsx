import { GiSoccerField } from "react-icons/gi";

const FooterInfo = ({ fixture, isLineupShown, handleLineupShown }) => (
  <section className="grid grid-cols-1 text-center">
    <header className="flex items-center justify-center w-full bg-slate-800 space-x-10 py-1">
      <h2>Match Details</h2>
      <div className="form-control flex">
        <label className="label cursor-pointer">
          <span className="label-text text-white text-base pr-1">
            Match Lineups
          </span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={isLineupShown}
            onChange={handleLineupShown}
          />
        </label>
      </div>
    </header>
    <p className="p-2">
      <GiSoccerField className="mx-auto text-mybig text-green-600" />{" "}
      {`(${fixture.fixture.venue.name})`}
    </p>
    <p className="p-2">
      <img
        src={fixture.league.flag}
        alt={fixture.league.country}
        width={50}
        className="mx-auto mb-3"
      />
      {`(${fixture.league.country})`}
    </p>
    <p className="p-2">{fixture.league.round}</p>
  </section>
);

export default FooterInfo;
