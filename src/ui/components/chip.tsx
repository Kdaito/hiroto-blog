type Props = {
  label: string;
}

const Chip: React.FC<Props> = ({label}) => {
  return (
    <a href="" className="text-white bg-gray-300 rounded text-sm px-3">{label}</a>
  )
}

export default Chip;