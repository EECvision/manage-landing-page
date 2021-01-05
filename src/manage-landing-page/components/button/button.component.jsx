import './button.styles.css';

const Button =({inverted})=> <div className={`button ${ inverted ? 'inverted' : ''}`}>get started</div>

export default Button;