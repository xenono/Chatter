import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 3vh;
`

const Footer = props => {
    return (
        <Wrapper>
            <h3 className="text-center h6 text-muted">&copy; Adrian Urbanczyk 2022</h3>
        </Wrapper>
    );
};

Footer.propTypes = {

};

export default Footer;