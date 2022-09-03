import { css } from "@emotion/react";
import styled from "@emotion/styled";

const UP_COLOR = "#16c784";
const DONW_COLOR = "#ea3943";

const UpCss = css`
  border-width: 0 8px 14px 8px;
  border-color: transparent transparent #16c784 transparent;
`;

const DownCss = css`
  border-style: solid;
  border-width: 14px 8px 0 8px;
  border-color: #ea3943 transparent transparent transparent;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Triangle = styled.span<{ up: boolean }>`
  width: 0;
  height: 0;
  border-style: solid;
  ${(props) => (props.up ? UpCss : DownCss)}
`;

export const Number = styled.span<{ up: boolean }>`
  padding: 0 0.5rem;
  color: ${(props) => (props.up ? UP_COLOR : DONW_COLOR)};
`;
