import PropTypes from 'prop-types';

const Background = ({ 
  src, 
  alt = 'Background', 
  className = '',
  children,
  overlay = false,
  overlayOpacity = 0.5
}) => {
  return (
    <div 
      className={`relative w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

Background.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.bool,
  overlayOpacity: PropTypes.number,
};

export default Background;
