import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    aligh-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cusor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommonListItem(props) {
    const { comment } = props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommonListItem;