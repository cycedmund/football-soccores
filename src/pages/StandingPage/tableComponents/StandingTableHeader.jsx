const StandingTableHeader = ({ header, data }) => {
  return (
    <th>
      <span
        className="tooltip tooltip-bottom tooltip-primary cursor-default"
        data-tip={data}
      >
        <span>{header}</span>
      </span>
    </th>
  );
};

export default StandingTableHeader;
