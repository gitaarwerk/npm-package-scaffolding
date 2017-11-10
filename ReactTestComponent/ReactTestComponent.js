import styled from 'styled-components';
import React from 'react';


const TestComponent = () => (
    <StyledComponent>
      Yay, the test is working!
    </StyledComponent>
);


const StyledComponent = styled.div`
  background: hotpink;
  padding: 20px;
  color: black;
  display: block;
  width: 200px;
  height: 200px;
  margin: 20px;
`;

export default TestComponent;

