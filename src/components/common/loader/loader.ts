import styled from 'styled-components';

export const Loader = styled.div`
  width: 32px;
  height: 32px;
  margin: 20px auto;
  border-radius: 50%;
  position: relative;
  opacity: 1;

  &:before, &:after {
    content: '';
    border: 1px #000 solid;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }

  &:before {
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }

  &:after {
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }

  @-webkit-keyframes spWaveAf {
    from {
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes spWaveBe {
    from {
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`;
