import marvel from '../../assets/gifs/Marvel.gif';

const LoadingMarvel = () => {
  return (
    <img
      src={marvel}
      style={{
        margin: '0 auto',
        background: 'none',
        display: 'block',
        objectFit: 'none',
        border: '10px solid #000',
        boxShadow: '15px 15px 20px rgba(0, 0, 0, 0.8)',
      }}
      width='100%'
      height='180px'
      alt='marvel loading'
    />
  );
};

export default LoadingMarvel;
