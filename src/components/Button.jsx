
const Button = ({ className, name, width, height, padding }) => {
    const styles = {
      width: width || 'auto',
      height: height || 'auto',
      padding: padding || '12px 45px',
      cursor: 'pointer',
    };
  
    
    return (
      <button className={`${className || ''}`} style={styles}>
        {name}
      </button>
    );
  };
  
  export default Button;