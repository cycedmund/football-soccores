const MainFixtureHeader = ({ fixture }) => {
  return (
    <header
      className="bg-slate-800 p-1 
text-white 
text-center 
w-full flex"
    >
      <img
        className="mx-auto w-[5%]"
        src={fixture.league.flag}
        alt={fixture.league.country}
      />
      <p className="w-[95%] pl-3 flex items-center text-yellow-600">
        {fixture.league.country.toUpperCase()}: {fixture.league.name}
      </p>
    </header>
  );
};

export default MainFixtureHeader;
