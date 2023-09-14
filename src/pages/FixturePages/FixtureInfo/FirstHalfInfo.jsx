import { PiSoccerBallFill } from "react-icons/pi";
import { TbCards } from "react-icons/tb";

const FirstHalfInfo = ({ firstHalfEvents, teams }) => {
  return (
    <>
      {firstHalfEvents.map((event) => {
        return event.team.name === teams.home.name ? (
          <article
            className="p-2 flex w-full items-center justify-start"
            key={event.team.id}
          >
            {event.time.extra ? (
              <section className="w-[5%]">
                {event.time.elapsed}+{event.time.extra}`
              </section>
            ) : (
              <section className="w-[5%]">{event.time.elapsed}`</section>
            )}

            {event.type === "Goal" ? (
              <section className="w-[5%] flex justify-end text-white">
                <PiSoccerBallFill style={{ fontSize: "1.5rem" }} />
              </section>
            ) : event.detail === "Yellow Card" ? (
              <section className="w-[5%] flex justify-end text-yellow-400">
                <TbCards style={{ fontSize: "1.5rem" }} />
              </section>
            ) : event.detail === "Red Card" ? (
              <section className="w-[5%] flex justify-end text-red-700">
                <TbCards style={{ fontSize: "1.5rem" }} />
              </section>
            ) : (
              <section className="badge badge-secondary">{event.type}</section>
            )}
            <p className="w-[15%] text-left pl-2">{event.player.name}</p>
          </article>
        ) : (
          <article
            className="p-2 flex w-full items-center justify-end"
            key={event.team.id}
          >
            <section className="w-[15%] text-right pr-2">
              {event.player.name}
            </section>
            {event.type === "Goal" ? (
              <section className="w-[5%] text-white">
                <PiSoccerBallFill style={{ fontSize: "1.5rem" }} />
              </section>
            ) : event.detail === "Yellow Card" ? (
              <section className="w-[5%] text-yellow-400">
                <TbCards style={{ fontSize: "1.5rem" }} />
              </section>
            ) : event.detail === "Red Card" ? (
              <section className="w-[5%] text-red-700">
                <TbCards style={{ fontSize: "1.5rem" }} />
              </section>
            ) : (
              <section className="badge badge-secondary">{event.type}</section>
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

export default FirstHalfInfo;
