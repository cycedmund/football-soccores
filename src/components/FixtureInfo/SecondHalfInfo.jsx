import { PiSoccerBallFill } from "react-icons/pi";
import { TbCards } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";

const SecondHalfInfo = ({ secondHalfEvents, teams }) => {
  return (
    <>
      {secondHalfEvents.map((event, index) => {
        return event.team.name === teams.home.name ? (
          <article
            className="p-2 flex w-full items-center justify-start"
            key={index}
          >
            {event.time.extra ? (
              <section className="w-[5%]">
                {event.time.elapsed}+{event.time.extra}`
              </section>
            ) : (
              <section className="w-[5%]">{event.time.elapsed}`</section>
            )}

            {event.type === "Goal" ? (
              <section className="flex items-center">
                <PiSoccerBallFill className="text-2xl mx-2" />
                <div className="flex flex-col">
                  {event.player.name}
                  <span className="text-gray-600">
                    {event.assist.name !== null && `(${event.assist.name})`}
                  </span>
                </div>
              </section>
            ) : event.detail === "Yellow Card" ? (
              <section className="flex items-center">
                <TbCards className="text-2xl text-yellow-400 fill-yellow-400 mx-2" />
                {event.player.name}
              </section>
            ) : event.detail === "Red Card" ? (
              <section className="flex items-center">
                <TbCards className="text-2xl text-red-700 fill-red-700 mx-2" />
                {event.player.name}
              </section>
            ) : event.detail.includes("ubs") ? (
              <section className="flex items-center">
                <GiCycle className="text-2xl text-green-700 mx-2" />
                <div className="flex flex-col">
                  <span>In: {event.assist.name}</span>
                  <span className="text-gray-600">
                    Out: {`(${event.player.name})`}
                  </span>
                </div>
              </section>
            ) : (
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
          <article
            className="p-2 flex w-full items-center justify-end"
            key={index}
          >
            {event.type === "Goal" ? (
              <section className="flex  items-center">
                <div className="flex flex-col">
                  {event.player.name}
                  <span className="text-gray-600">
                    {event.assist.name !== null && `(${event.assist.name})`}
                  </span>
                </div>
                <PiSoccerBallFill className="text-2xl mx-2" />
              </section>
            ) : event.detail === "Yellow Card" ? (
              <section className="flex items-center">
                {event.player.name}
                <TbCards className="text-2xl text-yellow-400 fill-yellow-400 mx-2" />
              </section>
            ) : event.detail === "Red Card" ? (
              <section className="flex items-center">
                {event.player.name}
                <TbCards className="text-2xl text-red-700 fill-red-700 mx-2" />
              </section>
            ) : event.detail.includes("ubs") ? (
              <section className="flex items-center">
                <div className="flex flex-col">
                  <span>In: {event.assist.name}</span>
                  <span className="text-gray-600">
                    Out: {`(${event.player.name})`}
                  </span>
                </div>
                <GiCycle className="text-2xl text-green-700 mx-2" />
              </section>
            ) : (
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

export default SecondHalfInfo;
