import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StripedStyle = css`
  tr:nth-of-type(2n + 1) td {
    background-color: #121315;
  }
  tr:nth-of-type(2n) td {
    background-color: #1b1d1f;
  }
`;

const stickyLeftStyle = css`
  position: sticky;
  left: 0;
  z-index: 5;
  &:after {
    content: "";
    position: absolute;
    right: 15px;
    top: 0px;
    width: 10px;
    height: 100%;
    box-shadow: inset 10px 0 8px -8px #8f8f8f;
  }
`;

export const TableStyled = styled.table<{
  striped: boolean;
  rowClick?: boolean;
}>`
  * {
    box-sizing: border-box;
    border: none;
  }
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    background-color: #ffffff;
  }

  thead {
    position: sticky;
    top: 0;
    z-index: 10;

    th {
      background: #292b30;
      color: #e1e8ee;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }

  tbody {
    tr {
      ${(props) =>
        props.rowClick &&
        css`
          cursor: pointer;
        `}
    }
    td {
      background: #121315;
    }
    ${(props) => props.striped && StripedStyle}
    tr:hover td {
      background: #3a3d44;
    }
  }
`;

export const Th = styled.th<{ fixed?: boolean }>`
  ${(props) => props.fixed && stickyLeftStyle}
`;

export const Td = styled.td<{ fixed?: boolean }>`
  ${(props) => props.fixed && stickyLeftStyle}
`;
