import styled, { css } from 'styled-components';
import colors from './colors';
import { shadowColor, undefinedCheck } from './btnFunctions';

const TrapButton = ({ className, color }) => {
  color = undefinedCheck(color);
  if (
    color.length === 1 &&
    colors.slice(1, colors.length).some((elem) => elem === color[0])
  ) {
    console.log('aqui');
    return (
      <div className={className}>
        <button type='button' className={`btn btn-outline-${color[0]}`}>
          TrapButton
        </button>
      </div>
    );
  } else {
    console.log('ali');
    return (
      <div className={className}>
        <button type='button' className='btn btn-outline-dark'>
          TrapButton
        </button>
      </div>
    );
  }
};

const Teste = styled(TrapButton)`
  button {
    ${({ color }) => {
      color = undefinedCheck(color);
      if (
        color.length === 1 &&
        colors.slice(1, colors.length).some((elem) => elem === color[0]) ===
          false &&
        color[0] !== ''
      ) {
        const shadow = shadowColor(color);
        return css`
          border-color: ${color[0]};
          color: ${color[0]};
          &:hover {
            background-color: ${color[0]};
            border-color: ${color[0]};
          }
          &:focus {
            border-color: ${color[0]};
            box-shadow: 0 0 0 0.25rem ${shadow[0]};
            color: ${color[0]};
          }
        `;
      }
    }}
    ${({ font }) =>
      font
        ? css`
            font-size: ${font[0]};
            font-family: ${font[1]}, sans-serif;
            &:hover {
              color: ${font[2]};
            }
          `
        : css``}
  }
`;

export default Teste;
