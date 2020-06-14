import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9900;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibily: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    /* Make a arrow appointment */
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      bottom: 20px;
      /* Certalizate resource */
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-color: #ff9900 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
