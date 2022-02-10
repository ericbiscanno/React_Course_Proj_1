import "./styles/Card.css";

const Card = props => {
  const cssClasses = `card ${props.className}`;// to inherit classnames from children

  return <div className={cssClasses}>{props.children}</div>;
}

export default Card;
