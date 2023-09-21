import { VscJersey } from "react-icons/vsc";

const LineupRow = ({ name, pos, num, team, img }) => {
  return (
    <tr>
      <td className="relative">
        <VscJersey className="mx-auto text-5xl" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500">
          {num}
        </span>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </div>
          </div>
          <div className="text-left">
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{team.name}</div>
          </div>
        </div>
      </td>
      <td>{pos}</td>
    </tr>
  );
};

export default LineupRow;
