function Card(props) {

  const classes = 'card' + props.className;

  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default Card;