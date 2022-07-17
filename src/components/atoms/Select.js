import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectBox = ({ data, type, onChange }) => {
  return (
    <StyledSelectBox onChange={onChange} defaultValue={type}>
      {data.map((option) => (
        <option key={option.id} value={option.value}>
          {option.title}
        </option>
      ))}
    </StyledSelectBox>
  );
};

export default SelectBox;

const StyledSelectBox = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  // -webkit-appearance: true;
`;

SelectBox.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
