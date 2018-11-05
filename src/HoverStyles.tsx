//tslint:disable
const K_SIZE = 40;

const greatPlaceStyle: React.CSSProperties = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
    zIndex: 5,
    color: 'white',
    borderRadius: '50%',
    height: '30px',
    lineHeight: '30px',
    width: '30px',
    margin: 0,
    textAlign: 'center',
    backgroundColor: 'black',
    cursor: 'pointer',
    transition: '0.5s'
};

const greatPlaceStyleHover: React.CSSProperties = {
  ...greatPlaceStyle,
  backgroundColor: '#A4A4A4',
  zIndex: 1
};

const infoBox: React.CSSProperties = {
  position: 'relative',
  top: -70,
  right: -5,
  width: 60,
  backgroundColor: 'cyan',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: 12,
  padding: 4,
  minHeight: '28px',
  opacity: 0,
  transition: 'opacity 0.2s',
  zIndex: -1,
  visibility: 'hidden',

};

const infoBoxHover: React.CSSProperties = {
  ...infoBox,
  visibility: 'visible',
  opacity: 1,
  zIndex: -1,
};

const infoBoxAddOn: React.CSSProperties = {
    width: 0,
    height: 0,
    right: -5,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '10px solid cyan',
    position: 'relative',
    top: -74,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.1s'
};

const infoBoxAddOnHover: React.CSSProperties = {
  ...infoBoxAddOn,
  visibility:'visible',
  opacity: 1
};

export {greatPlaceStyle, greatPlaceStyleHover, infoBox, infoBoxHover, infoBoxAddOn, infoBoxAddOnHover, K_SIZE};
