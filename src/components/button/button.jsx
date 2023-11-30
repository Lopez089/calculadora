export const Button = ({ value, onClick, type, SimbolActive }) => {
  const types = type === 'primary' ? 'number btn-primary' :
    type === 'secondary' ? 'btn-secondary' :
      type === 'lg' ? 'number btn-lg btn-primary' : ''
  const simbolActive = value === SimbolActive || value === 'X' && SimbolActive === '*' ? 'btn-active' : ''

  return <input type="button" value={value} onClick={(e) => onClick(e)} className={`${types}  ${simbolActive}`} />
}