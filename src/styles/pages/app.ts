import { styled } from "..";

export const Container = styled('div', { 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', { 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  img: { 
    cursor: 'pointer',
  }
})

export const BagContainer = styled('button', { 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  background: '#202024',
  borderRadius: 6,
  width: '3rem',
  height: '3rem',
  textDecoration: 'none',
  border: 'transparent',
  cursor: 'pointer',


  span: { 
    position: 'absolute',
    float: 'left',
    borderRadius: 999,
    width: 24,
    height: 24,
    backgroundColor: '$green300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    marginLeft: '40px',
    color: '$white',

  }
})