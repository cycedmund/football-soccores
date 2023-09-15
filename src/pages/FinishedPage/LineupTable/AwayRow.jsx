const AwayRow = ({ name, pos, num, team, img }) => {
  return (
    <tr>
      <td>{pos}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{team.name}</div>
          </div>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{num}</td>
    </tr>
  );
};

export default AwayRow;
