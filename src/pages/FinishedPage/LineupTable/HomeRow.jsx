const HomeRow = ({ name, pos, num, team, img }) => {
  // console.log(img);
  return (
    <tr>
      <td>{num}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{team.name}</div>
          </div>
        </div>
      </td>
      <td>{pos}</td>
    </tr>
  );
};

export default HomeRow;
