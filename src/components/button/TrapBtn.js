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
        <button type='button' className={`btn btn-${color[0]}`}>
          TrapButton
        </button>
      </div>
    );
  } else {
    console.log('ali');
    return (
      <div className={className}>
        <button type='button' className='btn btn-light'>
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
          background-color: ${color[0]};
          border-color: ${color[0]};
          &:hover {
            background-color: ${color[0]};
            border-color: ${color[0]};
          }
          &:focus {
            background-color: ${color[0]};
            border-color: ${color[0]};
            box-shadow: 0 0 0 0.25rem ${shadow[0]};
          }
        `;
      }
      if (color.length === 2) {
        const shadow = shadowColor(color);
        console.log(shadow);
        return css`
          background-color: ${color[0]};
          border-color: ${color[0]};
          &:hover {
            background-color: ${color[1]};
            border-color: ${color[1]};
          }
          &:focus {
            background-color: ${color[1]};
            border-color: ${color[1]};
            box-shadow: 0 0 0 0.25rem ${shadow[0]};
          }
        `;
      }
    }}
    ${({ font }) =>
      font
        ? css`
            font-size: ${font[0]};
            font-family: ${font[1]}, sans-serif;
            color: ${font[2]};
            &:hover,
            &:focus {
              color: ${font[3]};
            }
          `
        : css``}
  }
`;

export default Teste;
