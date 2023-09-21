import { PiSoccerBallFill } from "react-icons/pi";
import { TbCards } from "react-icons/tb";
import { GiCycle, GiReturnArrow } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { BiLogIn, BiLogOut } from "react-icons/bi";

const FirstHalfInfo = ({ firstHalfEvents, teams }) => {
  return (
    <>
      {firstHalfEvents.map((event, index) => {
        return event.team.name === teams.home.name ? (
          //==========Home Team==========
          <article
            className="p-2 flex w-full items-center justify-start"
            key={index}
          >
            {event.time.extra ? (
              // ===== Time+Extra Home ====
              <section className="w-[5%]">
                {event.time.elapsed}+{event.time.extra}`
              </section>
            ) : (
              <section className="w-[5%]">{event.time.elapsed}`</section>
            )}

            {event.type === "Goal" ? (
              // ===== Goal Home ====
              <section className="flex text-white items-center">
                {event.detail === "Own Goal" ? (
                  <i className="text-red-600 mx-2">
                    <GiReturnArrow className="text-l" />
                    <PiSoccerBallFill className="text-2xl" />
                  </i>
                ) : (
                  <PiSoccerBallFill className="text-2xl mx-2" />
                )}
                <div className="flex flex-col">
                  {event.player.name}
                  <span className="text-gray-600">
                    {event.assist.name !== null && `(${event.assist.name})`}
                  </span>
                </div>
              </section>
            ) : event.detail === "Yellow Card" ? (
              // ===== Yellow Card Home ====
              <section className="flex items-center">
                <TbCards className="text-2xl text-yellow-400 fill-yellow-400 mx-2" />
                {event.player.name}
              </section>
            ) : event.detail === "Red Card" ? (
              // ===== Red Card Home ====
              <section className="flex items-center">
                <TbCards className="text-2xl text-red-700 fill-red-700 mx-2" />
                {event.player.name}
              </section>
            ) : event.detail.includes("ubs") ? (
              // ===== Sub Home ====
              <section className="flex items-center">
                <GiCycle className="text-3xl text-sky-700 mx-2" />
                <div className="flex flex-col w-[100%]">
                  <span className="flex items-center">
                    <i className="mr-2">
                      <BiLogIn className="text-2xl" />
                    </i>
                    {event.assist.name}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <i className="mr-2">
                      <BiLogOut className="text-2xl" />
                    </i>
                    {event.player.name}
                  </span>
                </div>
              </section>
            ) : (
              // ===== VAR Home ====
              <section className="flex items-center">
                <SlScreenDesktop className="text-2xl text-violet-700 mx-2" />
                <span className="badge badge-primary mr-2">VAR</span>
                <div className="flex flex-col">
                  <span>{event.player.name}</span>
                  <span className="text-gray-600">{`(${event.detail})`}</span>
                </div>
              </section>
            )}
          </article>
        ) : (
          //==========Away Team==========
          <article
            className="p-2 flex w-full items-center justify-end"
            key={index}
          >
            {event.type === "Goal" ? (
              // ===== Goal Away ====
              <section className="flex  items-center">
                <div className="flex flex-col">
                  {event.player.name}
                  <span className="text-gray-600">
                    {event.assist.name !== null && `(${event.assist.name})`}
                  </span>
                </div>
                {event.detail === "Own Goal" ? (
                  <i className="text-red-600 mx-2">
                    <GiReturnArrow className="text-l" />
                    <PiSoccerBallFill className="text-2xl" />
                  </i>
                ) : (
                  <PiSoccerBallFill className="text-2xl mx-2" />
                )}
              </section>
            ) : event.detail === "Yellow Card" ? (
              // ===== Yellow Card Away ====
              <section className="flex items-center">
                {event.player.name}
                <TbCards className="text-2xl text-yellow-400 fill-yellow-400 mx-2" />
              </section>
            ) : event.detail === "Red Card" ? (
              // ===== Red Card Away ====
              <section className="flex items-center">
                {event.player.name}
                <TbCards className="text-2xl text-red-700 fill-red-700 mx-2" />
              </section>
            ) : event.detail.includes("ubs") ? (
              // ===== Sub Away ====
              <section className="flex items-center">
                <div className="flex flex-col w-[100%]">
                  <span className="flex items-center justify-end">
                    {event.assist.name}
                    <i className="ml-2">
                      <BiLogIn className="text-2xl" />
                    </i>
                  </span>
                  <span className="flex items-center justify-end text-gray-600">
                    {event.player.name}
                    <i className="ml-2">
                      <BiLogOut className="text-2xl" />
                    </i>
                  </span>
                </div>
                <GiCycle className="text-3xl text-sky-700 mx-2" />
              </section>
            ) : (
              // ===== VAR Away ====
              <section className="flex items-center">
                <div className="flex flex-col">
                  <span>{event.player.name}</span>
                  <span className="text-gray-600">{`(${event.detail})`}</span>
                </div>
                <span className="badge badge-primary ml-2">VAR</span>
                <SlScreenDesktop className="text-2xl text-violet-700 mx-2" />
              </section>
            )}
            {event.time.extra ? (
              // ===== Time+Extra Away ====
              <section className="w-[5%]">
                {event.time.elapsed}+{event.time.extra}`
              </section>
            ) : (
              <section className="w-[5%]">{event.time.elapsed}`</section>
            )}
          </article>
        );
      })}
    </>
  );
};

export default FirstHalfInfo;
