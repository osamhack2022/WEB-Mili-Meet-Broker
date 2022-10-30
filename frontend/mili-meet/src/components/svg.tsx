function Dual() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }}>
      <rect width="45" height="100" style={{ fill: '#646464' }}></rect>
      <rect width="45" height="100" style={{ fill: '#646464' }} x="55"></rect>
    </svg>
  );
}

function Quad() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }}>
      <rect style={{ fill: '#646464' }} width="45" height="45"></rect>
      <rect style={{ fill: '#646464' }} width="45" height="45" x="55"></rect>
      <rect style={{ fill: '#646464' }} width="45" height="45" y="55"></rect>
      <rect style={{ fill: '#646464' }} width="45" height="45" y="55" x="55"></rect>
    </svg>
  );
}

function Multiple() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }}>
      <rect style={{ fill: '#646464' }} width="20" height="30"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="26"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="53"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="80"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="0" y="70"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="26" y="70"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="53" y="70"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="80" y="70"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="0" y="35"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="26" y="35"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="53" y="35"></rect>
      <rect style={{ fill: '#646464' }} width="20" height="30" x="80" y="35"></rect>
    </svg>
  );
}

function OneToN() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }}>
      <rect style={{ fill: '#646464' }} width="60" height="100"></rect>
      <rect style={{ fill: '#646464' }} width="30" height="30" x="70"></rect>
      <rect style={{ fill: '#646464' }} width="30" height="30" x="70" y="70"></rect>
      <rect style={{ fill: '#646464' }} width="30" height="30" x="70" y="35"></rect>
    </svg>
  );
}

export { Dual, Quad, Multiple, OneToN };

